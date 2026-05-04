import { TypeAnimation } from 'react-type-animation';
import devImage from '../assets/devFinalPhoto.webp';
import { useTheme, useLanguage } from "../context/ContextProvider";

export const AboutMe = () => {
  const { darkTheme } = useTheme();
  const { language } = useLanguage();

  const translations = {
    roles: language === "es" 
      ? ['Desarrollador de Software', 'Desarrollador Web', 'Solucionador de problemas']
      : ['Software Developer', 'Web Developer', 'Problem Solver'],
    description: language === "es"
      ? "Mi nombre es Andriani Leandro, soy de Tucumán, Argentina. Desde chico siempre me interesa la logica y el por qué de las cosas, de ahí nació mi amor por la programación y el aprender el como se diseñan, arman y crean las cosas. Y tambien aprendiendo el por qué, cuando y como se usan distintos patrones y arquitecturas de diseño. Si hay algo que disfruto, es dar una solución eficente a un cliente y ver como el resultado le trae beneficios a todos los usuarios implicados."
      : "My name is Andriani Leandro. I am from Tucumán, Argentina. When i was a little boy, i was interested with logic and the 'why' of the things. From that thinking, begun my love for programming and know how to design, construct, and create things. Also i love to learn how, when, and why to use different design patterns and architectures. If there is something i really enjoy, it is to give an efficient solution to a client and see how the result brings benefits to all the users involved."
  };

  return (
    <section className={`flex flex-col md:flex-row-reverse items-center justify-center min-h-[80vh] px-6 py-12 md:px-20 gap-10 transition-colors duration-300 ${
      darkTheme ? "bg-blue-950 text-white border-slate-800" : "bg-white text-gray-900 border-gray-100"
    } border-b`}>
      {/* Profile Image */}
      <div className="w-full md:w-1/4 flex justify-center">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          <img
            src={devImage}
            alt="Andriani Leandro"
            className={`relative w-full aspect-square object-top md:w-auto rounded-full object-cover shadow-2xl border-4 transition-transform duration-500 group-hover:scale-105 ${
              darkTheme ? "border-slate-800" : "border-white"
            }`}
          />
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 gap-6 text-center md:text-left items-center md:items-start">
        <div className="space-y-2">
          <h1 className={`text-5xl md:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r ${
            darkTheme ? "from-blue-300 to-indigo-600 font-bold" : "from-blue-600 to-indigo-700 font-bold"
          }`}>
            <TypeAnimation
              sequence={['Andriani Leandro', 1000]}
              wrapper="span"
              speed={10}
              cursor={true}
              repeat={0}
            />
          </h1>
          <div className={`text-2xl md:text-3xl font-medium h-10 ${
            darkTheme ? "text-gray-200 font-bold" : "text-gray-900 font-bold"
          }`}>
            <TypeAnimation
              key={language} // Force re-render on language change
              sequence={[
                translations.roles[0], 2000,
                translations.roles[1], 2000,
                translations.roles[2], 2000,
              ]}
              wrapper="span"
              speed={10}
              cursor={true}
              repeat={Infinity}
            />
          </div>
        </div>

        <span className={`text-lg md:text-xl max-w-2xl leading-relaxed ${
          darkTheme ? "text-gray-300 font-bold" : "text-gray-800 font-bold"
        }`}>
          {translations.description}
        </span>

        {/* Social Links */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 md:gap-6 mt-4">
          <a
            href="https://github.com/Andriani25"
            target="_blank"
            rel="noopener noreferrer"
            className={`p-3 rounded-full transition-all duration-300 transform hover:-translate-y-1 shadow-md ${
              darkTheme ? "bg-slate-800 hover:bg-slate-700 text-blue-400" : "bg-gray-100 hover:bg-gray-200 text-blue-600"
            }`}
            aria-label="GitHub"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/andriani-leandro/"
            target="_blank"
            rel="noopener noreferrer"
            className={`p-3 rounded-full transition-all duration-300 transform hover:-translate-y-1 shadow-md ${
              darkTheme ? "bg-slate-800 hover:bg-slate-700 text-blue-400" : "bg-gray-100 hover:bg-gray-200 text-blue-600"
            }`}
            aria-label="LinkedIn"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect width="4" height="12" x="2" y="9" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
          <a
            href="/Currículum Vitae - Andriani Leandro.docx.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            className={`p-3 rounded-full transition-all duration-300 transform hover:-translate-y-1 shadow-md ${
              darkTheme ? "bg-slate-800 hover:bg-slate-700 text-blue-400" : "bg-gray-100 hover:bg-gray-200 text-blue-600"
            }`}
            aria-label="Descargar CV"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="12" y1="18" x2="12" y2="12" />
              <polyline points="9 15 12 12 15 15" />
            </svg>
          </a>
          <a
            href="mailto:andriani.leandro25@gmail.com"
            className={`p-3 rounded-full transition-all duration-300 transform hover:-translate-y-1 shadow-md ${
              darkTheme ? "bg-slate-800 hover:bg-slate-700 text-blue-400" : "bg-gray-100 hover:bg-gray-200 text-blue-600"
            }`}
            aria-label="Enviar Email"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};
