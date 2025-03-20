import { Link } from "react-router-dom";
import "../styles/styles_globais.css";
import "../styles/styles_tela_cadastro.css";
import linha_personalizada from "../assets/imagens/imagens-gerais/linha-personizada.png";
import Logo_link from "../componentes/componentes_tela_cadastro/logo_link";


function TelaCadastro() {
  return (
    <main id="main_tela_cadastro">
      <figure className="linha_personalizada">
        <img src={linha_personalizada} alt="linha_personalizada" />
      </figure>
      <section className="conteiner_principal">
        <Logo_link textLink="Tem uma conta? Entre aqui!" srcLink="#" />
        <div className="formulario">
          <h2>Cadastro</h2>
          <form>
            <input type="text" placeholder="Usuário" />
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Senha" />
            <input type="text" placeholder="Confirme a Senha" />
          </form>
          <button className="botaoGener btnForm">Criar conta</button>
        </div>
      </section>
      <figure className="linha_personalizada">
        <img src={linha_personalizada} alt="linha_personalizada" />
      </figure>
    </main>
  );
}

export default TelaCadastro;
