import {createHashRouter} from "react-router-dom";
import Contacts from "../pages/Contacts/Contacts";
import React from "react";
import ErrorPage from "../pages/NotFound/404";
import {Projects} from "../pages/Projects/Projects";
import {Team} from "../pages/Team/Team";
import {ProjectView} from "../pages/ProjectView/ProjectView";
import Home from "../pages/Home/Home";
import {Services} from "../pages/Services/Services";
import {Admin} from "../pages/Admin/Admin";

export const router = createHashRouter([
    {
        path: "/",
        element: <Home/>,
        errorElement: <ErrorPage />,
    },
    {
        path: "/contacts",
        element: <Contacts />,
    },
    {
        path: "/contacts/:exact",
        element: <Contacts />,
    },
    {
        path: "/projects/project_view/:id",
        element: <ProjectView/>,
    },
    {
        path: "/projects",
        element: <Projects />,
    },
    {
        path: "/team",
        element: <Team />,
    },
    {
        path: "/services",
        element: <Services />,
    },
    {
        path: "/apex_admin",
        element: <Admin />,
    },


    // {
    //     path: "*",
    //     element: <div>404</div>
    // },

]);
