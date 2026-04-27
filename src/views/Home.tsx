import { AboutMe } from "../components/AboutMe";
import { CardContainer } from "../components/CardContainer";
import { SkillsDashboard } from "../components/SkillsDashboard";
import { Education } from "../components/Education";
import { useTheme, useLanguage } from "../context/ContextProvider";
import { ThemeToggle } from "../components/ThemeToggle";
import { LanguageToggle } from "../components/LanguageToggle";

import formUspt1 from "../assets/formUspt1.jpeg";

import cabana2 from "../assets/cabana2.jpeg";

import usptTest3 from "../assets/usptTest3.jpeg";

const PROJECTS_DATA = [
    {
        title: {
            es: "Formulario de Inscripcion USPT",
            en: "Inscription Form Uspt"
        },
        image: formUspt1,
    },
    {
        title: {
            es: "Cabana Landing Page",
            en: "Cabana Landing Page"
        },
        image: cabana2,
    },
    {
        title: {
            es: "Test Vocacional USPT",
            en: "Vocational Test USPT"
        },
        image: usptTest3,
    },
];

const Home = () => {
    const { darkTheme } = useTheme();
    const { language } = useLanguage();

    const translatedProjects = PROJECTS_DATA.map(project => ({
        ...project,
        title: project.title[language]
    }));

    return (
        <main className={`min-h-screen transition-colors duration-300 ${
            darkTheme ? "bg-slate-900" : "bg-white"
        }`}>
            <ThemeToggle />
            <LanguageToggle />
            <AboutMe />
            <SkillsDashboard />
            <CardContainer cards={translatedProjects} />
             <Education />
        </main>
    );
};

export default Home;