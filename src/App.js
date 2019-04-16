import React, { Component } from 'react';
import './App.css';

/**
 * importando tasks dentro da pasta containers
 */
import Tasks from "./containers/Tasks";

/**
 * Inicia o React com seu primeiro Component App, ele é o pai de todos os components
 * Geralmente aqui vai um trocador de rotas, ou um provedor de estado do redux.
 */
class App extends Component {
  /**
   * Como todo componente render, jogando JSX ("html")
   */
  render() {
    return (
      <div className="App">
        <Tasks />
      </div>
    );
  }
}

export default App;
