import { Link } from "react-router-dom";
import logoHeader from "../../assets/imagens/imagens-desktop/logo-psi-desktop.png";

function Header() {
  return (
    <header>
      <figure className="logo_site_header">
        <img src={logoHeader} alt="logoHeader" />
      </figure>

      <nav className="menuHeaderGeral">
        <div className="menHeadEsquer menGeneri">
          <Link className="link_gener" to="/">
            Home
          </Link>
          <Link className="link_gener" to="#">
            Agentes
          </Link>
          <Link className="link_gener" to="#">
            Discord
          </Link>
        </div>

        <div className="menHeadDire menGeneri">
          <button className="botaoGener">
            <Link className="link_gener" to="/cadastro">
              Cadastro
            </Link>
          </button>

          <button className="botaoGener">
            <Link className="link_gener" to="/login">
              Login
            </Link>
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
