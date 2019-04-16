import React from "react";
import '../App.css';
import TextInput from "../components/TextInput";
import List from "../components/List";
import Storage from "../Storage";
import cogoToast from 'cogo-toast';

/**
 * Componente que seria uma "Página" do sistema.
 */
class Tasks extends React.Component {

  /**
   * Função chamada uma vez para iniciar o Componente
   * @param {*} props 
   */
  constructor(props){

    super(props);
    
    // Um objeto só pra fazer buscas no localstorage
    this.storage = new Storage();

    // definido um estado inicial da página com lista de tarefas vazia
    this.state = {
      tasks: []
    }

    // busca as tasks do localstorage
    // se tiver atualiza o estado passando o array do localStorage
    this.storage.getTasks()
          .then(tasks => this.setState({ tasks: tasks }))
          .catch(error => console.error('Nenhuma tarefa salva no LocalStorage'))

  }

  /**
   * Toda vez que o component atualizar ele ira atualizar também o localStogare [Ciclo de Vida de um Componente do React]
   */
  componentDidUpdate(){
    this.storage.setTasks(this.state.tasks)
  }

  /**
   * Adiciona uma nova tarefa ao estado, consequentemente atualizando o componente
   * @param {string} title 
   */
  newTask(title){

    let task = {
      title: title,
      progress: 0,
      done: false,
      date: new Date()
    }

    // atualiza componente/estado
    this.setState({
      tasks: [ task, ...this.state.tasks ]
    })

    // plugin
    cogoToast.info('Tarefa adicionada')
  }

  /**
   * Deleta uma tarefa do estado, atualiza componente.
   * @param {number} id 
   */
  deleteTask(id){
    this.setState({
      tasks: [...this.state.tasks.filter((task, index) => index !== id)]
    })

    cogoToast.success('Tarefa deletada')
  }

  /**
   * Adiciona + 25 ao progress da tarefa
   * @param {number} id 
   */
  progressTask(id){
    this.setState({
      tasks: [...this.state.tasks.map((task, index) => (index === id) ? { ...task, progress: task.progress + 25 } : task)]
    })

  }

  /**
   * Conclui uma tarefa
   * @param {number} id 
   */
  doneTask(id){
    this.setState({
      tasks: [...this.state.tasks.map((task, index) => (index === id) ? {...task, progress: 100, done: true } : task)]
    })

    cogoToast.success('Tarefa completa!')
  }

  render(){
    return (
      <section className="TaskList">
      <h3>Nova Tarefa</h3>

        <TextInput onSave={(title) => this.newTask(title)} />

        <h4 style={{ marginTop: 40 }}>Tarefas</h4>

        <List data={this.state.tasks}
              onDelete={(id) => this.deleteTask(id)} 
              onProgress={(id) => this.progressTask(id)}
              onDone={(id) => this.doneTask(id)}
              />
      </section>
    )
  }
}

export default Tasks;