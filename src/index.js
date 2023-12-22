import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Resume from './components/Resume';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    loader: () => console.warn = () => {},
    element: <App />,
  },
  {
    path: "/resume",
    element: <Resume />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
);
