function Formulario_conta(props) {
  const { inputs, handleChange } = props;

  return (
    <div className="formulario">
      <h2>{props.tituloForml}</h2>
      <form>
        {Object.entries(inputs).map(([key, input], index) => (
          <input
            key={index}
            type="text"
            name={key} 
            placeholder={input.placeholder}
            value={input.value} 
            onChange={handleChange} 
          />
        ))}
      </form>
      <button className="botaoGener btnForm">{props.btnText}</button>
    </div>
  );
}

export default Formulario_conta;
