import React from "react";
import '../App.css';

class TextInput extends React.Component {
  render(){
    return (
      <div className="text-input-container">
        <textarea rows={3} className="form-control text-input" placeholder="Qual é sua nova obrigação?">
        </textarea>
          <small className="float-left">caracteres restantes.</small>
          <button className="btn btn-primary float-right add-task">Adicionar</button>
      </div>
    )
  }
}

export default TextInput;