import { Link, useNavigate } from "react-router-dom";

function BlocoTextoImagemEsquer({ textoParagr, imgSrc, altText, botaoText, botaoLink }) {
  const navigate = useNavigate();
    return (
      <section className="aprese_sect">
        <article className="paragrafo_tela_inicial">
          <p>{textoParagr}</p>

          {botaoText && (
            <button
              className="botaoGener btn_parag_esquer"
              onClick={() => navigate(botaoLink)}
            >
              {botaoText}
            </button>
          )}
        </article>

        <figure className="imagem_paragraf_conf">
          <img src={imgSrc} alt={altText} />
        </figure>
      </section>
    );
}

export default BlocoTextoImagemEsquer;