import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root";
import { ThemeProvider } from "@material-tailwind/react";
import ErrorPage from "./components/ErrorPage";
import Home from "./components/Home";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import AuthProviders from "./Providers/AuthProvider";
import AddProduct from "./components/Pages/AddProduct";
import PrivetRoute from "./PrivetRoute/PrivetRoute";
import Products from "./components/Pages/Products";
import ProductDetails from "./components/Pages/ProductDetails";
import UpdateProduct from "./components/Pages/UpdateProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/brandCard.json"),
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/addProduct",
        element: (
          <PrivetRoute>
            <AddProduct></AddProduct>
          </PrivetRoute>
        ),
      },
      {
        path: "/products/:title",
        element: (
          <PrivetRoute>
            <Products></Products>
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/products/${params.title}`),
      },
      {
        path: "/details/:id",
        element: (
          <PrivetRoute>
            <ProductDetails></ProductDetails>
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/products/id/${params.id}`),
      },
      {
        path: "/update/:id",
        element: (
          <PrivetRoute>
            <UpdateProduct></UpdateProduct>
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/products/id/${params.id}`),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProviders>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </AuthProviders>
  </React.StrictMode>
);
