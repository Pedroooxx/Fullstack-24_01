import React, { useState } from "react";
import main from "./stylesheets/main.css"

const Main = () => {

  const [inputValue, setInputValue] = useState("");
  const [inputValue2, setInputValue2] = useState("");

  function handleInputChange(event) {
    setInputValue(event.target.value);
  }

  function handleInputChange2(event) {
    setInputValue2(event.target.value);
  }

  //Exercício Troca de Cor -----
  const [corAtual, setCorAtual] = useState("rgb(199, 0, 50)");

  function trocaCor() {
    const novaCor = corAtual === "rgb(199, 0, 50)" ? "white" : "rgb(199, 0, 50)";
    setCorAtual(novaCor);
  }
  //----------------------------

  //Exercício Validar Input +3 Caracteres -----
  const [mensagemValidacao, setMensagemValidacao] = useState("");

  function validaElemento() {
    if (inputValue.length < 3) {
      setMensagemValidacao("Erro: O texto precisa ter pelo menos 3 caracteres.");
    } else {
      setMensagemValidacao("Texto Válido.");
    }
  }
  //----------------------------

  //Exercício Cria Lista -------
  const [listaElementos, setListaElementos] = useState([]);

  const parBackgroundColor = "rgb(0, 199, 33)";
  const imparBackgroundColor = "rgb(0, 114, 19)";

  const Item = ({ texto, index }) => {
    const backgroundColor = index % 2 === 0 ? parBackgroundColor : imparBackgroundColor;
    console.log("Index:", index, "BackgroundColor:", backgroundColor);
    return <li className="itemLista" style={{ backgroundColor }}>{texto}</li>;
  };

  function adicionaElemento() {
    if (inputValue2.trim() !== "") {
      setListaElementos([...listaElementos, inputValue2]);
      setInputValue2("");
    }
  }
  //----------------------------

  return (
    <div className="main">
      <h1 className="mainTitle">Exercícios de Estados e Propriedades</h1>

      <button className="botaoTroca" onClick={(ev) => trocaCor()}> Trocar Cor </button>
      <h2 className="elementoTrocado" style={{ color: corAtual }}>Este elemento troca de cor.</h2>

      <button className="botaoValidar" onClick={(ev) => validaElemento()}> Validar Texto </button>
      <input className="elementoValidar" placeholder=" Insira o Texto Aqui "
        value={inputValue} onChange={handleInputChange}></input>
      <h2 className="mensagemValidacao">{mensagemValidacao}</h2>

      <button className="botaoLista" onClick={(ev) => adicionaElemento()}> Adicionar a Lista </button>
      <input className="adicionaElemento" placeholder=" Insira o Texto Aqui "
        value={inputValue2} onChange={handleInputChange2}></input>
      <ul className="lista"> Lista
        {listaElementos.map((elemento, index) => (
          <Item key={index} index={index} texto={elemento}> </Item>
        ))}
      </ul>

    </div>
  );
};
  
export default Main;