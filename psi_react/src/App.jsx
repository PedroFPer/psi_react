import "./styles/styles_globais.css";
import Header from "./componentes/componentes_gerais/Header";
import Footer from "./componentes/componentes_gerais/Footer";
import { Outlet } from "react-router-dom"; 

function App() {
  return (
    <div id="conteiner_geral">
      <Header />
        <Outlet /> 
      <Footer />
    </div>
  );
}

export default App;
