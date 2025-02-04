

import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import HomeComp from "../pages/home/HomeComp";
import AboutComp from "../pages/about/AboutComp";
import Pricing from "../pages/pricing/Pricing"

export const element = createBrowserRouter ([

    {
        path: "/",
        element: <Layout />,
        children: [
            { path: "/", element: <HomeComp / >},
            { path: "/about", element: <AboutComp /> },
            { path: "/pricing", element: <Pricing /> }
        ],
    },

])