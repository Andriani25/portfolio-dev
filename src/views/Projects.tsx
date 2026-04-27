import { ProjectDetail } from "../components/ProjectDetail";
import { useTheme } from "../context/ContextProvider";

const Projects = () => {
    const { darkTheme } = useTheme();

    return (
        <main className={`min-h-screen transition-colors duration-300 ${
            darkTheme ? "bg-slate-900" : "bg-white"
        }`}>
            <ProjectDetail />
        </main>
    );
};

export default Projects;