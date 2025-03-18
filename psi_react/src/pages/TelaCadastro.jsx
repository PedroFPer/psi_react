import "../styles/styles_globais.css";
import "../styles/styles_tela_cadastro.css";
import linha_personalizada from "../assets/imagens/imagens-gerais/linha-personizada.png";

function TelaCadastro() {
    
    return (
      <div id="conteiner_cadastro">
        <figure>
          <img src={linha_personalizada} alt="linha_personalizada" />
        </figure>
            
        <section className="conteiner_principal">
            <div className="logo_senha">
                    
            </div>

            <div className="formulario">
                    
            </div>    
        </section>

        <figure>
          <img src={linha_personalizada} alt="linha_personalizada" />
        </figure>
      </div>
    );
}

export default TelaCadastro;
