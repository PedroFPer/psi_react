import apres_psi from "../../assets/imagens/imagens-desktop/bem_vindo_ao_psi_desktop.png";
import img_tela_ini_1 from "../../assets/imagens/imagens-desktop/imagem_tela_inicial_1_versao_leve.jpg";
import img_tela_ini_2 from "../../assets/imagens/imagens-desktop/imagem_tela_inicial_2.webp";
import img_tela_ini_3 from "../../assets/imagens/imagens-desktop/imagem-tela-inicial-3.webp";
import BlocoTextoImagemEsquer from "./BlocoTextoImagemEsquer";
import BlocoTextoImagemDir from "./BlocoTextoImagemDir";
import "../../styles/styles_tela_inicial.css";

function TelaInicial() {
  return (
    <main id = "main_tela_inicial">
      <figure id="apresen_img">
        <img src={apres_psi} alt="aprese_psi" />
      </figure>

      <div id="contein_sect_apres">
        <BlocoTextoImagemEsquer
          textoParagr="PSI é um RPG onde a realidade é moldada pela crença e imaginação. Quando muitos acreditam em algo, ele se materializa, trazendo seres e eventos de outros mundos para o nosso."
          imgSrc={img_tela_ini_1}
          altText="Imagem sobre PSI"
        />

        <BlocoTextoImagemDir
          textoParagr="No PSI, criar fichas é rápido e intuitivo. Com uma interface prática, você pode personalizar atributos, habilidades e imagens sem complicações, deixando seu personagem pronto para o jogo em poucos minutos."
          imgSrc={img_tela_ini_2}
          altText="Criação de ficha"
          botaoText="Criar Ficha"
          botaoLink="#"
        />

        <BlocoTextoImagemEsquer
          textoParagr="Centralize e gerencie todos os seus agentes em um só lugar! Crie, edite e organize fichas de personagem para PSI com facilidade, garantindo um controle estratégico e eficiente da sua equipe."
          imgSrc={img_tela_ini_3}
          altText="Gestão de agentes"
          botaoText="Criar Conta"
          botaoLink="/cadastro"
        />
      </div>
    </main>
  );
}

export default TelaInicial;
