import { useState } from "react";
import { useParams, Link } from "react-router";
import { PROJECTS_DETAILED_DATA } from "../utils/projectsData";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme, useLanguage } from "../context/ContextProvider";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageToggle } from "./LanguageToggle";

export const ProjectDetail = () => {
    const { projectName } = useParams();
    const project = PROJECTS_DETAILED_DATA[projectName || ""];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const { darkTheme } = useTheme();
    const { language } = useLanguage();

    const translations = {
        notFound: language === "es" ? "Proyecto no encontrado" : "Project not found",
        backHome: language === "es" ? "Volver al inicio" : "Back to home",
        backPortfolio: language === "es" ? "Volver al Portfolio" : "Back to Portfolio",
        explanation: language === "es" ? "Explicación del Proyecto" : "Project Explanation",
        solution: language === "es" ? "Solución Implementada" : "Implemented Solution",
        github: language === "es" ? "Ver Código en GitHub" : "View Code on GitHub",
        private: language === "es" ? "Código Privado" : "Private Code",
        visitProject: language === "es" ? "Visitar Proyecto" : "Visit Project",
    };

    if (!project) {
        return (
            <div className={`flex flex-col items-center justify-center min-h-screen gap-4 transition-colors duration-300 ${
                darkTheme ? "bg-slate-900 text-white" : "bg-white text-gray-800"
            }`}>
                <h2 className="text-3xl font-bold">{translations.notFound}</h2>
                <Link to="/" className="text-blue-600 hover:underline">{translations.backHome}</Link>
            </div>
        );
    }

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
    };

    return (
        <section className={`flex flex-col items-center py-12 px-6 md:px-20 lg:px-32 min-h-screen transition-colors duration-300 ${
            darkTheme ? "bg-slate-900 text-white" : "bg-white text-gray-900"
        }`}>
            <ThemeToggle />
            <LanguageToggle />
            
            {/* Header */}
            <div className="w-full mb-10">
                <Link to="/" className={`inline-flex items-center mb-6 transition-colors ${
                    darkTheme ? "text-blue-400 hover:text-blue-300" : "text-blue-600 hover:text-blue-800"
                }`}>
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    {translations.backPortfolio}
                </Link>
                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
                    {project.title[language]}
                </h1>
                <div className="h-1.5 w-24 bg-blue-600 rounded-full mt-4" />
            </div>

            {/* Carousel Container */}
            <div className={`relative w-full md:w-[60%] aspect-video rounded-3xl overflow-hidden shadow-2xl group mb-12 border ${
                darkTheme ? "bg-slate-800 border-slate-700" : "bg-gray-100 border-transparent"
            }`}>
                <AnimatePresence mode="wait">
                    <motion.img
                        key={currentImageIndex}
                        src={project.images[currentImageIndex]}
                        alt={`${project.title[language]} screenshot ${currentImageIndex + 1}`}
                        className="absolute inset-0 w-full h-full object-cover"
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.5 }}
                    />
                </AnimatePresence>

                {/* Navigation Buttons */}
                <button
                    onClick={prevImage}
                    className={`absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full shadow-lg backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                        darkTheme ? "bg-slate-800/80 text-white hover:bg-slate-700" : "bg-white/80 text-gray-800 hover:bg-white"
                    }`}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <button
                    onClick={nextImage}
                    className={`absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full shadow-lg backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                        darkTheme ? "bg-slate-800/80 text-white hover:bg-slate-700" : "bg-white/80 text-gray-800 hover:bg-white"
                    }`}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                </button>

                {/* Dots Indicator */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                    {project.images.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrentImageIndex(i)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                i === currentImageIndex 
                                ? "bg-blue-600 w-8" 
                                : darkTheme ? "bg-white/20" : "bg-white/60"
                            }`}
                        />
                    ))}
                </div>
            </div>

            {/* Info Sections */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-6xl">
                <div className="space-y-4">
                    <h2 className="text-2xl font-bold flex items-center gap-2">
                        <span className={`p-2 rounded-lg text-blue-600 ${darkTheme ? "bg-blue-900/30" : "bg-blue-100"}`}>📝</span>
                        {translations.explanation}
                    </h2>
                    <p className={`text-lg leading-relaxed ${darkTheme ? "text-gray-200" : "text-gray-800"}`}>
                        {project.description[language]}
                    </p>
                </div>

                <div className="space-y-4">
                    <h2 className="text-2xl font-bold flex items-center gap-2">
                        <span className={`p-2 rounded-lg text-green-600 ${darkTheme ? "bg-green-900/30" : "bg-green-100"}`}>💡</span>
                        {translations.solution}
                    </h2>
                    <p className={`text-lg leading-relaxed ${darkTheme ? "text-gray-200" : "text-gray-800"}`}>
                        {project.solution[language]}
                    </p>
                </div>
            </div>

            {/* Action Buttons Container */}
            <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-6 w-full max-w-4xl px-4">
                {/* Live Project Button */}
                {project.projectUrl && (
                    <a
                        href={project.projectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-full md:w-auto inline-flex items-center justify-center gap-3 px-8 py-5 rounded-2xl font-bold text-lg shadow-xl transform transition-all duration-300 hover:-translate-y-1 active:scale-95 ${
                            darkTheme ? "bg-blue-600 text-white hover:bg-blue-700 shadow-blue-500/20" : "bg-blue-600 text-white hover:bg-blue-700 shadow-blue-600/20"
                        }`}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        {translations.visitProject}
                    </a>
                )}

                {/* GitHub Button */}
                {project.isPublic ? (
                    <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-full md:w-auto inline-flex items-center justify-center gap-3 px-8 py-5 rounded-2xl font-bold text-lg shadow-xl transform transition-all duration-300 hover:-translate-y-1 active:scale-95 ${
                            darkTheme ? "bg-slate-800 text-white hover:bg-slate-700 border border-slate-700 shadow-slate-900/50" : "bg-gray-900 text-white hover:bg-gray-800 shadow-slate-200/50"
                        }`}
                    >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.362.81 1.096.81 2.22v3.285c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                        {translations.github}
                    </a>
                ) : (
                    <div
                        className={`w-full md:w-auto inline-flex items-center justify-center gap-3 px-8 py-5 rounded-2xl font-bold text-lg shadow-inner opacity-70 cursor-not-allowed ${
                            darkTheme ? "bg-slate-800 text-gray-500 border border-slate-700" : "bg-gray-200 text-gray-500"
                        }`}
                    >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.362.81 1.096.81 2.22v3.285c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                        {translations.private}
                    </div>
                )}
            </div>
        </section>
    );
};
