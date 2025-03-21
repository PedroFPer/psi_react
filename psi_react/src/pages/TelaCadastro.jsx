import { Link } from "react-router-dom";
import "../styles/styles_globais.css";
import "../styles/styles_tela_cadastro.css";
import linha_personalizada from "../assets/imagens/imagens-gerais/linha-personizada.png";
import Logo_link from "../componentes/componentes_tela_cadastro/logo_link";
import Formulario_conta from "../componentes/componentes_tela_cadastro/Formulario_conta";
import { useState } from "react";



function TelaCadastro() {
  
 const [inputs, setInput] = useState({
   nome: { placeholder: "Digite o seu nome", value: "" },
   email: { placeholder: "Digite o seu email", value: "" },
   senha: { placeholder: "Digite a sua senha", value: "" },
   confSenha: { placeholder: "Confirme sua senha", value: "" },
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
        <Logo_link textLink="Tem uma conta? Entre aqui!" srcLink="/login" />
        <Formulario_conta
          tituloForml="Cadastro"
          btnText="Criar conta"
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

export default TelaCadastro;
