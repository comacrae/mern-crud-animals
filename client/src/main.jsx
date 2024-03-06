import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min";

import CreateAnimal from "./components/createAnimal";
import ShowAnimalInfo from "./components/showAnimalInfo";
import ShowAnimalList from "./components/showAnimalList";
import UpdateAnimalInfo from "./components/updateAnimalInfo";

const router = createBrowserRouter([
  { path: "/", element: <ShowAnimalList /> },
  { path: "/create-animal", element: <CreateAnimal /> },
  { path: "/show-animal/:id", element: <ShowAnimalInfo /> },
  { path: "/edit-animal/:id", element: <UpdateAnimalInfo /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
