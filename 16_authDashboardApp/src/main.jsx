import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import {
  RouterProvider,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Login from "./components/Login.jsx";
import Layout from "./components/Layout.jsx";
import NotFound from "./components/NotFound.jsx";
import Home from "./components/Home.jsx";
import AuthContextProvider from "./context/AuthContextProvider.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  </StrictMode>
);
