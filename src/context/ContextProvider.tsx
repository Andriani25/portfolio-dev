import { createContext, useContext, useState } from "react";

// Theme Context
export const ThemeContext = createContext<{ darkTheme: boolean; setDarkTheme: (action: boolean) => void } | null>(null);

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme must be used within a ContextProvider");
    }
    return context;
}

// Language Context
type Language = "es" | "en";
export const LanguageContext = createContext<{ language: Language; setLanguage: (lang: Language) => void } | null>(null);

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error("useLanguage must be used within a ContextProvider");
    }
    return context;
}

export const ContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [darkTheme, setDarkTheme] = useState<boolean>(true);
    const [language, setLanguage] = useState<Language>("es");

    return (
        <ThemeContext.Provider value={{ darkTheme, setDarkTheme }}>
            <LanguageContext.Provider value={{ language, setLanguage }}>
                {children}
            </LanguageContext.Provider>
        </ThemeContext.Provider>
    );
}