import { createBrowserRouter } from "react-router-dom";

import Home from "./pages/Home/home";

export const router = createBrowserRouter([
  {
    path: "/",
    children: [{path: "/", element: <Home />}],
  }
]);
