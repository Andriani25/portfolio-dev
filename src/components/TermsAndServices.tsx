import { Link } from "react-router";
import { TERMS_DATA } from "../utils/termsData";
import { useTheme, useLanguage } from "../context/ContextProvider";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageToggle } from "./LanguageToggle";

export const TermsAndServices = () => {
    const { darkTheme } = useTheme();
    const { language } = useLanguage();

    const translations = {
        backHome: language === "es" ? "Volver al inicio" : "Back to home",
    };

    return (
        <section className={`flex flex-col items-center py-12 px-6 md:px-20 lg:px-32 min-h-screen transition-colors duration-300 ${
            darkTheme ? "bg-slate-900 text-white" : "bg-white text-gray-900"
        }`}>
            <ThemeToggle />
            <LanguageToggle />

            {/* Header */}
            <div className="w-full max-w-4xl mb-10">
                <Link
                    to="/"
                    className={`inline-flex items-center mb-6 transition-colors ${
                        darkTheme ? "text-blue-400 hover:text-blue-300" : "text-blue-600 hover:text-blue-800"
                    }`}
                >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    {translations.backHome}
                </Link>
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                    {TERMS_DATA.title[language]}
                </h1>
                <p className={`mt-2 text-sm ${darkTheme ? "text-gray-400" : "text-gray-500"}`}>
                    {TERMS_DATA.lastUpdated[language]}
                </p>
                <p className={`mt-6 text-lg leading-relaxed ${darkTheme ? "text-gray-200" : "text-gray-800"}`}>
                    {TERMS_DATA.intro[language]}
                </p>
                <div className="h-1.5 w-24 bg-blue-600 rounded-full mt-4" />
            </div>

            {/* Sections */}
            <div className="w-full max-w-4xl space-y-6">
                {TERMS_DATA.sections.map((section) => (
                    <div key={section.id} className={`rounded-2xl border p-6 transition-colors ${
                        darkTheme ? "border-slate-700 bg-slate-800/50" : "border-gray-200 bg-gray-50"
                    }`}>
                        <h2 className="text-xl font-bold flex items-start gap-3">
                            <span className="text-2xl">{section.icon}</span>
                            {section.title[language]}
                        </h2>
                        <p className={`mt-3 leading-relaxed ${darkTheme ? "text-gray-300" : "text-gray-700"}`}>
                            {section.content[language]}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};