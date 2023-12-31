import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home/Home";
import About from "../pages/Home/About/About";
import Skill from "../pages/Home/Skill/Skill";
import Contract from "../pages/Home/Contract/Contract";
import Projects from "../pages/Home/Projects/Projects";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/skill",
        element: <Skill></Skill>,
      },
      {
        path: "/project",
        element: <Projects></Projects>,
      },
      {
        path: "/contract",
        element: <Contract></Contract>,
      },
    ],
  },
]);

export default router;
