import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import App from "./App";
import Home from "./pages/HomePage";
import Product from "./pages/ProductsPage";
import Pricing from "./pages/PricingPage";
import Downloads from "./pages/DownloadsPage";
import Documentation from "./pages/DocumentationPage";
import ApiReference from "./pages/ApiReference";
import Support from "./pages/SupportPage";
import Privacy from "./pages/PrivacyPolicy"
import Terms from "./pages/TermandConditions"

const theme = createTheme({});

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Home /> },
      { path: "products", element: <Product /> },
      { path: "pricing", element: <Pricing /> },
      { path: "downloads", element: <Downloads /> },
      { path: "documentation", element: <Documentation /> },
      { path: "ref", element: <ApiReference /> },
      { path: "support", element: <Support /> },
      {path: "privacy-policy", element: <Privacy />},
      {path: "terms-conditions", element: < Terms />}

    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={theme}>
    <RouterProvider router={router} />
  </ThemeProvider>,
);
