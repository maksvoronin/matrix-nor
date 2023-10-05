import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Landing, Nor } from "./pages";

const router = createBrowserRouter([
  { path: "/", element: <Landing title="MatrixNor" /> },
  { path: "/nor", element: <Nor title="Nor" /> }
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
