import { createBrowserRouter } from "react-router";
import Home from "../views/Home";
import Projects from "../views/Projects";

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
]);