

import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import HomeComp from "../pages/home/HomeComp";
import AboutComp from "../pages/about/AboutComp";
import Pricing from "../pages/pricing/Pricing"
import CoursesComp from "../pages/courseslist/CoursesComp";
import Contact from "../pages/contact/Contact";
import Signin from "../pages/auth/signin/Signin";
import SignUp from "../pages/auth/signup/SignUp";

export const element = createBrowserRouter ([

    {
        path: "/",
        element: <Layout />,
        children: [
            { path: "/", element: <HomeComp /> },
            { path: "/about", element: <AboutComp /> },
            { path: "/pricing", element: <Pricing /> },
            { path: "/courses", element: <CoursesComp /> },
            { path: "/contact-us", element: <Contact /> },
            { path: "/auth/sign-in", element: <Signin /> },
            { path: "/auth/sign-up", element: <SignUp /> },
        ],
    },

])