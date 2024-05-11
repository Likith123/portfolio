import { RouterProvider, createBrowserRouter } from "react-router-dom";

import PageOutlet from "./components/PageOutlet";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

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
