import { useRoutes } from "react-router-dom";
import Layout from "../layouts/Layout";
import Blog from "../components/Main/Blog/Blog";
import Home from "../components/Main/Home/Home";
import Contact from "../components/Main/Contact/Contact";
import Certifications from "../components/Main/Certifications/Certifications";
import Portfolio from "../components/Main/Portfolio/Portfolio";

export default function Router() {
    const routes = useRoutes([
        {
            path: '/',
            element: <Layout />,
            children: [
                {
                    path: 'blogs', element: <Blog />
                },
                {
                    path: 'home', element: <Home />
                },
                {
                    path: 'contact', element: <Contact />
                },
                {
                    path: 'certifications', element: <Certifications />
                },
                {
                    path: 'portfolios', element: <Portfolio />
                }
            ]
        }
    ])

    return routes;
}