import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ID, Landing, Nor, SG } from "./pages";

const router = createBrowserRouter([
  { path: "/", element: <Landing title="MatrixNor" /> },
  { path: "/nor", element: <Nor title="Nor" /> },
  { path: "/id", element: <ID title="ID" /> },
  { path: "/sg", element: <SG title="SG" /> },
]);

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
