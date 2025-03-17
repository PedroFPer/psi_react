import logoHeader from "../../assets/imagens/imagens-desktop/logo-psi-desktop.png";

function Header() {
  return (
    <header>
      <figure className="logo_site_header">
        <img src={logoHeader} alt="logoHeader" />
      </figure>

      <nav className="menuHeaderGeral">
        <div className='menHeadEsquer menGeneri'>
          <a href="#">Home</a>
          <a href="#">Agentes</a>
          <a href="#">Discord</a>
        </div>

        <div className='menHeadDire menGeneri'>
          <button className="botaoGener">
            <a href="#">Cadastro</a>
          </button>

          <button className="botaoGener">
            <a href="#">Login</a>
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
