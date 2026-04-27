import { useTheme } from "../context/ContextProvider";

export const ThemeToggle = () => {
    const { darkTheme, setDarkTheme } = useTheme();

    return (
        <button
            onClick={() => setDarkTheme(!darkTheme)}
            className={`fixed top-6 right-6 z-50 p-3 rounded-2xl shadow-xl border transition-all duration-300 hover:scale-110 group ${
                darkTheme 
                ? "bg-slate-800 border-slate-700 text-blue-400" 
                : "bg-white border-gray-200 text-yellow-500"
            }`}
            aria-label="Toggle Theme"
        >
            <div className="relative w-6 h-6">
                {/* Sun Icon */}
                <svg
                    className={`absolute inset-0 w-6 h-6 transform transition-all duration-500 ${
                        darkTheme ? "rotate-90 opacity-0 scale-0" : "rotate-0 opacity-100 scale-100"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
                </svg>
                {/* Moon Icon */}
                <svg
                    className={`absolute inset-0 w-6 h-6 transform transition-all duration-500 ${
                        !darkTheme ? "-rotate-90 opacity-0 scale-0" : "rotate-0 opacity-100 scale-100"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
            </div>
        </button>
    );
};
