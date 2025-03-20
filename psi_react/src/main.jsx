import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TelaInicial from "./componentes/componentes_tela_inicial/TelaInicial.jsx";
import TelaCadastro from "./pages/TelaCadastro.jsx";
import TelaLogin from "./pages/TelaLogin.jsx"


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <TelaInicial /> }, 
      { path: "/cadastro", element: <TelaCadastro /> }, 
      {path: "/login", element:<TelaLogin/>}
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
