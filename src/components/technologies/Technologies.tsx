const techStack = [
  { name: 'Android', icon: 'android' },
  { name: 'Django', icon: 'django' },
  { name: 'Figma', icon: 'figma' },
  { name: 'GitHub', icon: 'github' },
  { name: 'JS', icon: 'javascript' },
  { name: 'TS', icon: 'typescript' },
  { name: 'Miro', icon: 'miro' },
  { name: 'MongoDB', icon: 'mongodb' },
  { name: 'Oracle', icon: 'oracle' },
  { name: 'Python', icon: 'python' },
  { name: 'React', icon: 'react' },
  { name: 'TailWind', icon: 'tailwind' },
  { name: 'WordPress', icon: 'wordpress' }
];

const Technologies = () => {
  const loopStack = [...techStack, ...techStack, ...techStack];

  return (
    <section className="py-24 bg-[#FAF9F6] dark:bg-[#0f172a] overflow-hidden border-t border-gray-100 dark:border-gray-800">
      <div className="fade-sides relative flex">
        <div className="flex animate-marquee whitespace-nowrap py-4 hover:[animation-play-state:paused] cursor-pointer">
          {loopStack.map((tech, index) => {
            // ESTA ES LA LÍNEA CLAVE PARA VITE
            const iconUrl = new URL(`../assets/${tech.icon}.svg`, import.meta.url).href;

            return (
              <div key={index} className="flex items-center space-x-6 mx-12 group">
                <img 
                  src={iconUrl} 
                  alt={tech.name}
                  className="w-10 h-10 object-contain grayscale opacity-60 dark:invert group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none'; // Si falla, oculta la imagen rota
                  }}
                />
                <span className="text-xl font-medium text-gray-400 dark:text-gray-500 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                  {tech.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Technologies;