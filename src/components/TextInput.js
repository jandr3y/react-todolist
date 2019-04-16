import React from "react";
import '../App.css';
import cogoToast from 'cogo-toast';

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

  /**
   * Função chamada quando clicar em adicionar
   */
  handleSave(){
    if(this.state.title.length > 3){

      // atualiza este componente
      this.setState({ title: '', maxChars: this.maxChars })

      // chama a função passada no componente pai
      this.props.onSave(this.state.title)
    
    }else{

      cogoToast.error('A tarefa deve ter mais de 3 letras...')
    
    }
  }

  render(){
    return (
      <div className="text-input-container">
        <textarea rows={3} className="form-control text-input" maxLength="200" value={this.state.title} onChange={(e) => this.handleChange(e.target.value)} placeholder="Qual é sua nova obrigação?">
        { this.state.title }
        </textarea>
          <small className="float-left">{ this.state.maxChars } caracteres restantes.</small>
          <button className="btn btn-primary float-right add-task"  onClick={() => this.handleSave()}>Adicionar</button>
      </div>
    )
  }
}

export default TextInput;