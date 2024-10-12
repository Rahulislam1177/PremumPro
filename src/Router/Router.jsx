import React from "react";
import Layout from "../Layout/Layout";
import Home from "../components/Home/Home";
import { createBrowserRouter } from "react-router-dom";
import SpanischerScetion from "../components/SpanischerScetion/SpanischerScetion";
import SwissCaviarPage from "../components/SwissCaviarPage/SwissCaviarPage";
import WeisserCavilrPage from "../components/WeisserCavilrPage/WeisserCavilrPage";
import KontaktPage from "../components/KontaktPage/KontaktPage";
import FromPage from "../components/FromPage/FromPage";
import Wishlist from "../components/WishlistPage/Wishlist";
import Shops from "../components/shopPage/Shops";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Spanischer",
        element: <SpanischerScetion />,
      },
      {
        path: "/SwissCaviar",
        element: <SwissCaviarPage />,
      },
      {
        path: "/WeisserCavilr",
        element: <WeisserCavilrPage />,
      },
      {
        path: "/Kontakt",
        element: <KontaktPage />,
      },
      {
        path: "/From",
        element: <FromPage />,
      },
      {
        path: "/Wishlist",
        element: <Wishlist />,
      },
      {
        path: "/shop",
        element: <Shops />,
      },
    ],
  },
]);

export default Router;
