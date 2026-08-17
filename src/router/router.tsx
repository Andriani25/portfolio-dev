import { createBrowserRouter } from "react-router";
import Home from "../views/Home";
import Projects from "../views/Projects";
import TermsAndServices from "../views/TermsAndServices";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/projects/:projectName",
        loader: ({ params }) => {
            return params.projectName;
        },
        element: <Projects />,
    },
    {
        path: "/terms-and-services",
        element: <TermsAndServices />,
    },
]);