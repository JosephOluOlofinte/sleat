

import { createBrowserRouter } from "react-router-dom";
// import HomeLayout from "../layout/HomeLayout";
import HomeComp from "../pages/home/HomeComp";
// import AboutLayout from "../layout/AboutLayout";
import Layout from "../layout/Layout";
import AboutComp from "../pages/about/AboutComp";

export const element = createBrowserRouter ([

    {
        path: "/",
        element: <Layout />,
        children: [
            { path: "/", element: <HomeComp / >},
            { path: "/about", element: <AboutComp /> }
        ],
    },

])