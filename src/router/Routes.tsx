

import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import HomeComp from "../pages/home/HomeComp";
import AboutComp from "../pages/about/AboutComp";
import Pricing from "../pages/pricing/Pricing"
import CoursesComp from "../pages/courseslist/CoursesComp";

export const element = createBrowserRouter ([

    {
        path: "/",
        element: <Layout />,
        children: [
            { path: "/", element: <HomeComp /> },
            { path: "/about", element: <AboutComp /> },
            { path: "/pricing", element: <Pricing /> },
            { path: "/courses", element: <CoursesComp /> }
        ],
    },

])