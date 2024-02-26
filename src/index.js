import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Resume from "./components/Resume";
import {
  createBrowserRouter,
  RouterProvider,
  useLocation,
} from "react-router-dom";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <ScrollToTop />
        <App />
      </>
    ),
    children: [
      {
        path: "/",
        loader: () => (console.warn = () => {}),
        element: <Home />,
      },
      {
        path: "/about",
        element: <About standalone={true} />,
      },
      {
        path: "/projects",
        element: <Projects standalone={true} />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
  {
    path: "/resume",
    element: (
      <>
        <ScrollToTop />
        <Resume standalone={true} />
      </>
    ),
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
