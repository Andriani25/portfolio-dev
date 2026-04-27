import { useTheme, useLanguage } from "../context/ContextProvider";

export const SkillsDashboard = () => {
  const { darkTheme } = useTheme();
  const { language } = useLanguage();

  const translations = {
    title: language === "es" ? "Habilidades & Experiencia" : "Skills & Experience",
    sections: {
      frontend: language === "es" ? "Frontend" : "Frontend",
      backend: language === "es" ? "Backend" : "Backend",
      softSkills: language === "es" ? "Soft Skills" : "Soft Skills",
      learning: language === "es" ? "Aprendiendo" : "Learning",
      languages: language === "es" ? "Idiomas" : "Languages",
    },
    softSkills: language === "es" 
      ? [
          { name: 'Trabajo en equipo', icon: '👥' },
          { name: 'Experiencia en entorno SCRUM', icon: '🔄' },
          { name: 'Comunicación efectiva con personas no técnicas', icon: '🗣️' },
          { name: 'Aprendizaje constante', icon: '📚' },
        ]
      : [
          { name: 'Teamwork', icon: '👥' },
          { name: 'SCRUM environment experience', icon: '🔄' },
          { name: 'Effective communication with non-technical people', icon: '🗣️' },
          { name: 'Constant learning', icon: '📚' },
        ],
    levels: {
      native: language === "es" ? "Nativo" : "Native",
      fluent: language === "es" ? "B2" : "B2",
      basic: language === "es" ? "A2" : "A2",
    }
  };

  const frontend = [
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'TailwindCSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
    { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  ];

  const backend = [
    { name: 'NodeJS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    { name: 'ExpressJS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
    { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
    { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  ];

  const learning = [
    { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'R', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg' },
  ];


  const languages = [
    { name: language === "es" ? 'Español' : 'Spanish', level: translations.levels.native, percent: 100 },
    { name: language === "es" ? 'Inglés' : 'English', level: translations.levels.fluent, percent: 70 },
    { name: language === "es" ? 'Italiano' : 'Italian', level: translations.levels.basic, percent: 30 },
  ];

  return (
    <section className={`px-6 py-16 md:px-20 lg:px-32 leading-relaxed font-sans mt-0 transition-colors duration-300 ${
      darkTheme ? "bg-slate-900 text-white" : "bg-blue-200 text-gray-900"
    }`}>
      <div className="mb-12 text-center md:text-left">
        <h2 className={`text-3xl font-extrabold md:text-5xl ${
          darkTheme ? "text-white" : "text-gray-900"
        }`}>
          {translations.title}
        </h2>
        <div className="mt-4 h-1.5 w-24 rounded-full bg-blue-600 mx-auto md:mx-0" />
      </div>

      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
        {/* Frontend Section */}
        <div className={`p-8 rounded-3xl shadow-sm hover:shadow-md transition-all duration-300 ${
          darkTheme ? "bg-slate-800" : "bg-gray-50"
        }`}>
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <span className={`p-2 rounded-xl text-blue-600 ${
              darkTheme ? "bg-blue-500/30" : "bg-blue-100"
            }`}>🖥️</span>
            {translations.sections.frontend}
          </h3>
          <div className="flex flex-wrap gap-4">
            {frontend.map((skill) => (
              <div
                key={skill.name}
                className={`flex items-center gap-3 px-4 py-2.5 rounded-2xl shadow-sm border transition-all group cursor-default ${
                  darkTheme 
                  ? "bg-blue-950 border-slate-700 hover:border-blue-400" 
                  : "bg-white border-gray-100 hover:border-blue-300"
                }`}
              >
                <img src={skill.icon} alt={skill.name} className="w-6 h-6 transition-all duration-300" />
                <span className={`font-bold ${
                  darkTheme ? "text-gray-300" : "text-gray-700"
                }`}>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Backend Section */}
        <div className={`p-8 rounded-3xl shadow-sm hover:shadow-md transition-all duration-300 ${
          darkTheme ? "bg-slate-800" : "bg-gray-50"
        }`}>
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <span className={`p-2 rounded-xl text-green-600 ${
              darkTheme ? "bg-green-900/30" : "bg-green-100"
            }`}>⚙️</span>
            {translations.sections.backend}
          </h3>
          <div className="flex flex-wrap gap-4">
            {backend.map((skill) => (
              <div
                key={skill.name}
                className={`flex items-center gap-3 px-4 py-2.5 rounded-2xl shadow-sm border transition-all group cursor-default ${
                  darkTheme 
                  ? "bg-blue-950 border-slate-700 hover:border-green-400" 
                  : "bg-white border-gray-100 hover:border-green-300"
                }`}
              >
                <img src={skill.icon} alt={skill.name} className="w-6 h-6 transition-all duration-300" />
                <span className={`font-bold ${
                  darkTheme ? "text-gray-300" : "text-gray-700"
                }`}>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Soft Skills Section */}
        <div className={`p-8 rounded-3xl shadow-sm hover:shadow-md transition-all duration-300 ${
          darkTheme ? "bg-slate-800" : "bg-gray-50"
        }`}>
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <span className={`p-2 rounded-xl text-purple-600 ${
              darkTheme ? "bg-purple-900/30" : "bg-purple-100"
            }`}>🌟</span>
            {translations.sections.softSkills}
          </h3>
          <div className="space-y-4">
            {translations.softSkills.map((skill) => (
              <div
                key={skill.name}
                className={`flex items-center gap-4 p-4 rounded-2xl border transition-all ${
                  darkTheme 
                  ? "bg-blue-950 border-slate-700" 
                  : "bg-white border-gray-100 shadow-sm"
                }`}
              >
                <span className="text-2xl transform transition-transform hover:scale-120 inline-block">{skill.icon}</span>
                <span className={`font-semibold ${
                  darkTheme ? "text-gray-300" : "text-gray-700"
                }`}>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Current Learning */}
        <div className={`p-8 rounded-3xl shadow-sm hover:shadow-md transition-all duration-300 ${
          darkTheme ? "bg-slate-800" : "bg-gray-50"
        }`}>
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <span className={`p-2 rounded-xl text-orange-600 ${
              darkTheme ? "bg-orange-900/30" : "bg-orange-100"
            }`}>🚀</span>
            {translations.sections.learning}
          </h3>
          <div className="flex flex-wrap gap-4">
            {learning.map((skill) => (
              <div
                key={skill.name}
                className={`flex items-center gap-3 px-4 py-2.5 rounded-2xl shadow-sm border transition-all group cursor-default ${
                  darkTheme 
                  ? "bg-blue-950 border-slate-700 hover:border-orange-400" 
                  : "bg-white border-gray-100 hover:border-orange-300"
                }`}
              >
                <img src={skill.icon} alt={skill.name} className="w-6 h-6 transition-all duration-300" />
                <span className={`font-bold ${
                  darkTheme ? "text-gray-300" : "text-gray-700"
                }`}>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Languages */}
        <div className={`p-8 rounded-3xl shadow-sm hover:shadow-md transition-all duration-300 lg:col-span-2 ${
          darkTheme ? "bg-slate-800" : "bg-gray-50"
        }`}>
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <span className={`p-2 rounded-xl text-indigo-600 ${
              darkTheme ? "bg-indigo-900/30" : "bg-indigo-100"
            }`}>🌍</span>
            {translations.sections.languages}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {languages.map((lang) => (
              <div key={lang.name} className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className={`font-bold text-lg ${
                    darkTheme ? "text-gray-200" : "text-gray-900"
                  }`}>{lang.name}</span>
                  <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                    darkTheme ? "bg-blue-900/50 text-blue-300" : "bg-blue-100 text-blue-700"
                  }`}>
                    {lang.level}
                  </span>
                </div>
                <div className={`h-3 w-full rounded-full overflow-hidden ${
                  darkTheme ? "bg-slate-700" : "bg-gray-200"
                }`}>
                  <div
                    className={`h-full rounded-full transition-all duration-1000 ${
                      darkTheme ? "bg-blue-500" : "bg-blue-600"
                    }`}
                    style={{ width: `${lang.percent}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
