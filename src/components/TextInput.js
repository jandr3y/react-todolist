import React from "react";
import '../App.css';

class TextInput extends React.Component {

  constructor(props){
    super(props);
    this.maxChars = 200

    this.state = {
      title: '',
      maxChars: this.maxChars
    }

  }

  /**
   * Função chamada quando houver altração no textarea
   * @param {string} value 
   */
  handleChange(value){
    this.setState({
      title: value,
      maxChars: this.maxChars - value.length
    })
  }

  handleSave(){
    if(this.state.title.length > 3){
      this.setState({ title: '', maxChars: this.maxChars })
      this.props.onSave(this.state.title)
    }
  }

  render(){
    return (
      <div className="text-input-container">
        <textarea rows={3} className="form-control text-input" maxLength="200" value={this.state.title} onChange={(e) => this.handleChange(e.target.value)} placeholder="Qual é sua nova obrigação?">
        { this.state.title }
        </textarea>
          <small className="float-left">{ this.state.maxChars } caracteres restantes.</small>
          <button className="btn btn-primary float-right add-task" disabled={this.state.title.length < 3} onClick={() => this.handleSave()}>Adicionar</button>
      </div>
    )
  }
}

export default TextInput;