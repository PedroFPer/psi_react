import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import TelaInicial from "./componentes/componentes_tela_inicial/TelaInicial.jsx";
import TelaCadastro from "./pages/TelaCadastro.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <TelaInicial /> }, // Rota inicial dentro do App
      { path: "/cadastro", element: <TelaCadastro /> }, // Cadastro dentro do App
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
