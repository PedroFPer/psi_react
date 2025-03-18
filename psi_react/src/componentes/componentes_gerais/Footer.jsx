import logoDiscord from "../../assets/imagens/imagens-gerais/logo-discord.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <nav className="menuFooterGeral">
        <div className="menFooterEsquer menGeneri">
          <Link className="link_gener" to="#">
            Sobre o PSI
          </Link>
          <Link className="link_gener" to="#">
            Informações para contato
          </Link>
          <Link className="link_gener" to="#">
            Privacidade
          </Link>
        </div>

        <div className="menFooterDire menGeneri">
          <Link className="link_gener" to="#">
            Siga-nós
          </Link>
          <figure className="logo_discord">
            <img src={logoDiscord} alt="logoDiscord" />
          </figure>
        </div>
      </nav>
    </footer>
  );
}

export default Footer;
