import ScrollStack, { ScrollStackItem } from './ScrollStack';
import { useLanguage } from '../../context/LanguageContext';
import './ScrollStack.css'; 

const IntroSection = () => {
  const { t } = useLanguage() as any;

  return (
    <section className="intro-wrapper">
      <ScrollStack 
        useWindowScroll={false} 
        itemDistance={80}      
        itemStackDistance={25}  
        stackPosition="15%"     
        baseScale={0.88}        
        blurAmount={0}          
        itemScale={.04}         
      >
        {/* Card 1: Projects (Naranja) */}
        <ScrollStackItem itemClassName="card-base card-primary">
          <div className="card-inner">
            <h2>{t.intro?.step1Title || "Projects"}</h2>
            {/* Aquí pegas tu SVG después */}
          </div>
        </ScrollStackItem>

        {/* Card 2: Technologies (Negro) */}
        <ScrollStackItem itemClassName="card-base card-dark">
          <div className="card-inner">
            <h2>{t.intro?.step2Title || "Technologies"}</h2>
             {/* SVG */}
          </div>
        </ScrollStackItem>

        {/* Card 3: About Me (Naranja) */}
        <ScrollStackItem itemClassName="card-base card-primary">
          <div className="card-inner">
            <h2>{t.intro?.step3Title || "About Me"}</h2>
             {/* SVG */}
          </div>
        </ScrollStackItem>

        {/* Card 4: Contact (Negro) */}
        <ScrollStackItem itemClassName="card-base card-dark">
          <div className="card-inner">
            <h2>{t.intro?.step4Title || "Contact"}</h2>
             {/* SVG */}
          </div>
        </ScrollStackItem>

        {/* Card 5: Welcome (Naranja) */}
        <ScrollStackItem itemClassName="card-base card-primary">
          <div className="card-inner">
            <h2>{t.intro?.step5Title || "Welcome!"}</h2>
             {/* SVG */}
          </div>
        </ScrollStackItem>

      </ScrollStack>
    </section>
  );
};

export default IntroSection;