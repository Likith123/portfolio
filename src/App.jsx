import { RouterProvider, createBrowserRouter } from "react-router-dom";

import PageOutlet from "./components/PageOutlet";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

const router = createBrowserRouter([
    {
        path: "/",
        element: <PageOutlet />,
        children: [
            { index: true, element: <Home /> },
            { path: "about", element: <About /> },
            { path: "projects", element: <Projects /> },
            { path: "contactMe", element: <Contact /> },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
