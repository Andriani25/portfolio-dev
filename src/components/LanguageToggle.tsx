import { useLanguage, useTheme } from "../context/ContextProvider";

export const LanguageToggle = () => {
    const { language, setLanguage } = useLanguage();
    const { darkTheme } = useTheme();

    const toggleLanguage = () => {
        setLanguage(language === "es" ? "en" : "es");
    };

    return (
        <button
            onClick={toggleLanguage}
            className={`fixed top-6 right-24 z-50 p-2 rounded-2xl shadow-xl border transition-all duration-300 hover:scale-110 group ${
                darkTheme 
                ? "bg-slate-800 border-slate-700 text-white" 
                : "bg-white border-gray-200 text-gray-800"
            }`}
            aria-label="Toggle Language"
        >
            <div className="flex items-center justify-center w-8 h-8 relative overflow-hidden rounded-lg">
                {/* Spain Flag (ES) */}
                <svg
                    className={`absolute inset-0 w-8 h-8 transform transition-all duration-500 ${
                        language === "en" ? "translate-y-full opacity-0" : "translate-y-0 opacity-100"
                    }`}
                    viewBox="0 0 750 500"
                >
                    <rect width="750" height="500" fill="#c60b1e"/>
                    <rect width="750" height="250" y="125" fill="#ffc400"/>
                    <path d="M115 155v150a50 50 0 0 0 100 0v-150h-100z" fill="#c60b1e" stroke="#ffc400" strokeWidth="2"/>
                </svg>

                {/* USA Flag (EN) */}
                <svg
                    className={`absolute inset-0 w-8 h-8 transform transition-all duration-500 ${
                        language === "es" ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"
                    }`}
                    viewBox="0 0 7410 3900"
                >
                    <rect width="7410" height="3900" fill="#bf0a30"/>
                    <path d="M0 300h7410m0 600H0m0 600h7410m0 600H0m0 600h7410m0 600H0" stroke="#fff" strokeWidth="300"/>
                    <rect width="2964" height="2100" fill="#002868"/>
                    <g fill="#fff">
                        <g id="s18">
                            <g id="s9">
                                <g id="s5">
                                    <g id="s">
                                        <path id="st" d="M247 90l70 213h-185l150-108h-190z" transform="scale(0.615)"/>
                                    </g>
                                    <use href="#s" x="494"/>
                                    <use href="#s" x="988"/>
                                    <use href="#s" x="1482"/>
                                    <use href="#s" x="1976"/>
                                </g>
                                <use href="#s" x="247" y="210"/>
                                <use href="#s" x="741" y="210"/>
                                <use href="#s" x="1235" y="210"/>
                                <use href="#s" x="1729" y="210"/>
                            </g>
                            <use href="#s9" y="420"/>
                        </g>
                        <use href="#s18" y="840"/>
                        <use href="#s9" y="1680"/>
                    </g>
                </svg>
            </div>
            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 transition-transform bg-gray-800 text-white text-xs px-2 py-1 rounded">
                {language === "es" ? "English" : "Español"}
            </span>
        </button>
    );
};
