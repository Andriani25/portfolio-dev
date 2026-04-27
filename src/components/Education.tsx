import { useTheme, useLanguage } from "../context/ContextProvider";

export const Education = () => {
    const { darkTheme } = useTheme();
    const { language } = useLanguage();

    const translations = {
        title: language === "es" ? "Formación Académica" : "Academic Background",
        utn: {
            name: "Universidad Tecnológica Nacional (UTN)",
            city: language === "es" ? "Buenos Aires (Distancia)" : "Buenos Aires (Remote)",
            degree: language === "es" ? "Tecnicatura Universitaria en Programación" : "Technical Degree in Programming",
            date: language === "es" ? "Febrero de 2025 - Actualidad" : "February 2025 - Present",
            description: language === "es" 
                ? "Formación en programación de software y sistemas, enfocada en la implementación de aplicaciones y soluciones informáticas."
                : "Training in software and systems programming, focused on the implementation of applications and computer solutions.",
            course: language === "es" ? "Curso de Javascript y Typescript Avanzado" : "Advanced Javascript and Typescript Course",
            courseDate: language === "es" ? "Febrero de 2025 - Junio de 2025" : "February 2025 - June 2025",
            courseDetail: language === "es"
                ? "Teoría y práctica avanzada sobre JS/TS: Funciones, Prototipos, Conditional Types, Generics y más."
                : "Advanced theory and practice on JS/TS: Functions, Prototypes, Conditional Types, Generics, and more.",
            certificate: language === "es" ? "Ver Certificado" : "View Certificate",
        },
        soyHenry: {
            name: "SoyHenry",
            city: "Buenos Aires",
            degree: "Full Stack Developer",
            date: language === "es" ? "Febrero de 2022 - Junio de 2022" : "February 2022 - June 2022",
            description: language === "es"
                ? "Bootcamp intensivo de +700 horas de código, enfocado en tecnologías web modernas y proyectos reales."
                : "Intensive bootcamp with +700 coding hours, focused on modern web technologies and real-world projects."
        },
        school: {
            name: "Colegio Giosue Carducci",
            city: "Congreso 200",
            degree: language === "es" ? "Orientación de Márketing y Publicidad" : "Marketing and Advertising Orientation",
            date: language === "es" ? "Marzo de 2005 - Diciembre de 2019" : "March 2005 - December 2019",
        }
    };

    return (
        <section className={`px-6 py-20 md:px-20 lg:px-32 transition-colors duration-300 ${
            darkTheme ? "bg-slate-900 text-white" : "bg-blue-200 text-gray-900"
        } border-t ${darkTheme ? "border-slate-800" : "border-gray-200"}`}>
            <div className="max-w-6xl mx-auto">
                <div className="mb-16 text-center md:text-left">
                    <h2 className={`text-4xl md:text-6xl font-extrabold tracking-tight ${
                        darkTheme ? "text-white" : "text-slate-900"
                    }`}>
                        {translations.title}
                    </h2>
                    <div className="h-1.5 w-24 bg-blue-600 rounded-full mt-4 mx-auto md:mx-0" />
                </div>

                <div className="grid gap-12">
                    {/* UTN Section */}
                    <div className={`p-8 rounded-3xl shadow-xl border transition-all duration-300 hover:scale-[1.01] ${
                        darkTheme ? "bg-blue-950/50 border-slate-700" : "bg-white border-transparent shadow-slate-200/50"
                    }`}>
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                            <div>
                                <h3 className="text-2xl md:text-3xl font-bold text-blue-600">{translations.utn.name}</h3>
                                <p className={`text-lg font-medium ${darkTheme ? "text-gray-400" : "text-gray-800"}`}>{translations.utn.city}</p>
                            </div>
                            <span className={`px-5 py-2 rounded-2xl text-sm font-bold shadow-sm ${
                                darkTheme ? "bg-blue-900/40 text-blue-300" : "bg-blue-50 text-blue-700"
                            }`}>
                                {translations.utn.date}
                            </span>
                        </div>
                        
                        <div className="space-y-6">
                            <div>
                                <h4 className={`text-xl font-bold mb-2 ${darkTheme ? "text-gray-200" : "text-gray-800"}`}>
                                    {translations.utn.degree}
                                </h4>
                                <p className={`leading-relaxed ${darkTheme ? "text-gray-200" : "text-gray-800"}`}>
                                    {translations.utn.description}
                                </p>
                            </div>

                            <div className={`p-6 rounded-2xl border ${
                                darkTheme ? "bg-slate-900/40 border-blue-900/50" : "bg-blue-200 border-blue-100"
                            }`}>
                                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-3 gap-2">
                                    <h5 className="font-bold text-blue-600 flex items-center gap-2">
                                        <span className="text-xl">📜</span>
                                        {translations.utn.course}
                                    </h5>
                                    <span className={`text-xs font-bold uppercase tracking-wider ${darkTheme ? "text-blue-400" : "text-blue-600"}`}>
                                        {translations.utn.courseDate}
                                    </span>
                                </div>
                                <p className={`text-sm mb-4 ${darkTheme ? "text-gray-400" : "text-gray-800"}`}>
                                    {translations.utn.courseDetail}
                                </p>
                                <a 
                                    href="https://validator.centrodeelearning.com/validator/w94rGP14lz" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition-all ${
                                        darkTheme 
                                        ? "bg-blue-600 text-white hover:bg-blue-500 shadow-lg shadow-blue-900/20" 
                                        : "bg-blue-600 text-white hover:bg-slate-900 shadow-lg shadow-blue-600/20"
                                    }`}
                                >
                                    {translations.utn.certificate}
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* SoyHenry Section */}
                        <div className={`p-8 rounded-3xl shadow-xl border transition-all duration-300 hover:scale-[1.01] ${
                            darkTheme ? "bg-blue-950/50 border-slate-700" : "bg-white border-transparent"
                        }`}>
                            <div className="mb-6">
                                <h3 className="text-2xl font-bold text-blue-600">{translations.soyHenry.name}</h3>
                                <p className={`text-sm font-medium ${darkTheme ? "text-gray-400" : "text-gray-800"}`}>{translations.soyHenry.city}</p>
                                <span className={`inline-block mt-3 px-4 py-1.5 rounded-xl text-xs font-bold ${
                                    darkTheme ? "bg-blue-900/40 text-blue-300" : "bg-blue-50 text-blue-700"
                                }`}>
                                    {translations.soyHenry.date}
                                </span>
                            </div>
                            <h4 className={`text-lg font-bold mb-3 ${darkTheme ? "text-gray-200" : "text-gray-800"}`}>
                                {translations.soyHenry.degree}
                            </h4>
                            <p className={`text-sm leading-relaxed ${darkTheme ? "text-gray-400" : "text-gray-800"}`}>
                                {translations.soyHenry.description}
                            </p>
                        </div>

                        {/* School Section */}
                        <div className={`p-8 rounded-3xl shadow-xl border transition-all duration-300 hover:scale-[1.01] ${
                            darkTheme ? "bg-blue-950/50 border-slate-700" : "bg-white border-transparent"
                        }`}>
                            <div className="mb-6">
                                <h3 className="text-2xl font-bold text-blue-600">{translations.school.name}</h3>
                                <p className={`text-sm font-medium ${darkTheme ? "text-gray-400" : "text-gray-800"}`}>{translations.school.city}</p>
                                <span className={`inline-block mt-3 px-4 py-1.5 rounded-xl text-xs font-bold ${
                                    darkTheme ? "bg-blue-900/40 text-blue-300" : "bg-blue-50 text-blue-700"
                                }`}>
                                    {translations.school.date}
                                </span>
                            </div>
                            <h4 className={`text-lg font-bold ${darkTheme ? "text-gray-200" : "text-gray-800"}`}>
                                {translations.school.degree}
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
