import React from "react";
import '../App.css';
import TextInput from "../components/TextInput";
import List from "../components/List";

class Tasks extends React.Component {
  render(){
    return (
      <section className="TaskList">
      <h3>Nova Tarefa</h3>
        <TextInput />
        <h4 style={{ marginTop: 40 }}>Tarefas</h4>
        <List />
      </section>
    )
  }
}

export default Tasks;