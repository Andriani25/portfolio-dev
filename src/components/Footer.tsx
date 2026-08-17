import { Link } from "react-router";
import { useTheme, useLanguage } from "../context/ContextProvider";

export const Footer = () => {
    const { darkTheme } = useTheme();
    const { language } = useLanguage();

    const translations = {
        rights: language === "es"
            ? "Andriani Leandro. Todos los derechos reservados."
            : "Andriani Leandro. All rights reserved.",
        terms: language === "es" ? "Términos y Servicios" : "Terms and Services",
        madeWith: language === "es" ? "Hecho con" : "Made with",
    };

    return (
        <footer className={`border-t transition-colors duration-300 ${
            darkTheme ? "bg-blue-950 border-slate-800 text-gray-300" : "bg-white border-gray-100 text-gray-600"
        }`}>
            <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-sm">
                    © {new Date().getFullYear()} {translations.rights}
                </p>
                <div className="flex items-center gap-6">
                    <Link
                        to="/terms-and-services"
                        className={`text-sm transition-colors ${
                            darkTheme ? "text-blue-400 hover:text-blue-300" : "text-blue-600 hover:text-blue-800"
                        }`}
                    >
                        {translations.terms}
                    </Link>
                    <span className="text-sm">
                        {translations.madeWith} <span className="text-blue-500">♥</span> React & Tailwind
                    </span>
                </div>
            </div>
        </footer>
    );
};