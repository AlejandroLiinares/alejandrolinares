import React, { useLayoutEffect, useRef, useCallback } from 'react';
import type { ReactNode } from 'react';
import './ScrollStack.css';

export interface ScrollStackItemProps {
  itemClassName?: string;
  children: ReactNode;
}

export const ScrollStackItem: React.FC<ScrollStackItemProps> = ({ children, itemClassName = '' }) => (
  <div className={`scroll-stack-card ${itemClassName}`.trim()}>{children}</div>
);

interface ScrollStackProps {
  className?: string;
  children: ReactNode;
  itemDistance?: number;
  itemScale?: number;
  itemStackDistance?: number;
  stackPosition?: string;
  baseScale?: number;
  blurAmount?: number;
  useWindowScroll?: boolean;
}

const ScrollStack: React.FC<ScrollStackProps> = ({
  children,
  className = '',
  itemDistance = 80,
  itemScale = 0.04,
  itemStackDistance = 25,
  stackPosition = '15%',
  baseScale = 0.88,
  blurAmount = 0,
  useWindowScroll = false,
}) => {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLElement[]>([]);
  // Referencia para controlar el loop de animación
  const ticking = useRef(false);

  // --- MOTOR DE TRANSFORMACIÓN (Tu matemática intacta) ---
  const updateCardTransforms = useCallback(() => {
    if (!cardsRef.current.length) {
      ticking.current = false;
      return;
    }

    const scroller = scrollerRef.current;
    // Si usamos window scroll o scroll interno
    const scrollTop = useWindowScroll ? window.scrollY : (scroller?.scrollTop || 0);
    const containerHeight = useWindowScroll ? window.innerHeight : (scroller?.clientHeight || 0);
    
    // Parsear porcentajes
    const stackPosPx = (parseFloat(stackPosition) / 100) * containerHeight;
    
    const endElement = useWindowScroll 
        ? document.querySelector('.scroll-stack-end') 
        : scroller?.querySelector('.scroll-stack-end');
    const endElementTop = (endElement as HTMLElement)?.offsetTop || 0;

    cardsRef.current.forEach((card, i) => {
      if (!card) return;
      const cardTop = card.offsetTop;
      
      // Puntos de anclaje
      const pinStart = cardTop - stackPosPx - (itemStackDistance * i);
      // Ajuste para que se suelte un poco antes
      const pinEnd = endElementTop - (containerHeight / 2); 

      // Cálculo de progreso (0 a 1)
      const progress = Math.min(Math.max((scrollTop - pinStart) / 500, 0), 1);
      const scale = 1 - (progress * (1 - (baseScale + i * itemScale)));
      
      let translateY = 0;
      if (scrollTop >= pinStart && scrollTop <= pinEnd) {
        translateY = scrollTop - cardTop + stackPosPx + (itemStackDistance * i);
      } else if (scrollTop > pinEnd) {
        translateY = pinEnd - cardTop + stackPosPx + (itemStackDistance * i);
      }

      // Aplicar estilos hardware-accelerated
      card.style.transform = `translate3d(0, ${translateY}px, 0) scale(${scale})`;
      
      if (blurAmount > 0) {
         const blur = scrollTop > pinStart ? (scrollTop - pinStart) / 100 * blurAmount : 0;
         card.style.filter = `blur(${Math.min(blur, blurAmount)}px)`;
      }
    });

    ticking.current = false;
  }, [baseScale, itemScale, itemStackDistance, stackPosition, blurAmount, useWindowScroll]);

  // --- MANEJADOR DE SCROLL NATIVO ---
  const onScroll = useCallback(() => {
    if (!ticking.current) {
      requestAnimationFrame(updateCardTransforms);
      ticking.current = true;
    }
  }, [updateCardTransforms]);

  useLayoutEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller && !useWindowScroll) return;

    // 1. Capturar cartas
    cardsRef.current = Array.from(
      useWindowScroll 
      ? document.querySelectorAll('.scroll-stack-card') 
      : scroller!.querySelectorAll('.scroll-stack-card')
    ) as HTMLElement[];

    // 2. Estilos iniciales (Layout)
    cardsRef.current.forEach((card, i) => {
      if (i < cardsRef.current.length - 1) card.style.marginBottom = `${itemDistance}px`;
      card.style.willChange = 'transform'; // Optimización
    });

    // 3. Event Listeners (NATIVOS)
    const target = useWindowScroll ? window : scroller;
    if (target) {
      target.addEventListener('scroll', onScroll, { passive: true });
      // Resize observer para recalcular si cambia el tamaño
      window.addEventListener('resize', onScroll, { passive: true });
    }

    // Ejecución inicial
    updateCardTransforms();

    return () => {
      if (target) {
        target.removeEventListener('scroll', onScroll);
        window.removeEventListener('resize', onScroll);
      }
    };
  }, [itemDistance, useWindowScroll, onScroll, updateCardTransforms]);

  return (
    <div 
      className={`scroll-stack-scroller ${className}`.trim()} 
      ref={scrollerRef}
    >
      <div className="scroll-stack-inner">
        {children}
        <div className="scroll-stack-end" />
      </div>
    </div>
  );
};

export default ScrollStack;