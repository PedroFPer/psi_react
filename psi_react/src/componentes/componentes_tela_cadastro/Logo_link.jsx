import { Link } from "react-router-dom";
import logo_psi from "../../assets/imagens/imagens-desktop/psi_tela_cadast.png";

function Logo_link(props) {
  return (
    <div className="logo_link">
      <figure>
        <img src={logo_psi} alt="logo_psi" />
      </figure>
      <Link className="link_gener linkFormu" to={props.srcLink}>
        {props.textLink}
      </Link>
    </div>
  );
}

export default Logo_link;
