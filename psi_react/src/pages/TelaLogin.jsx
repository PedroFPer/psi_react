import { Link } from "react-router-dom";
import "../styles/styles_globais.css";
import "../styles/styles_tela_cadastro.css";
import linha_personalizada from "../assets/imagens/imagens-gerais/linha-personizada.png";
import Logo_link from "../componentes/componentes_tela_cadastro/logo_link";
import Formulario_conta from "../componentes/componentes_tela_cadastro/Formulario_conta";
import { useState } from "react";

function TelaLogin() {
  const [inputs, setInput] = useState({
    email: { placeholder: "Digite o seu email", value: "" },
    senha: { placeholder: "Digite a sua senha", value: "" },
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInput((prevState) => ({
      ...prevState,
      [name]: {
        ...prevState[name],
        value: value,
      },
    }));
  };

  return (
    <main id="main_tela_cadastro">
      <figure className="linha_personalizada">
        <img src={linha_personalizada} alt="linha_personalizada" />
      </figure>
      <section className="conteiner_principal">
        <Logo_link
          textLink="Não tem conta ainda? Se cadastre!"
          srcLink="/cadastro"
        />
        <Formulario_conta
          tituloForml="Login"
          btnText="Entrar"
          inputs={inputs}
          handleChange={handleChange}
        />
      </section>
      <figure className="linha_personalizada">
        <img src={linha_personalizada} alt="linha_personalizada" />
      </figure>
    </main>
  );
}

export default TelaLogin;
