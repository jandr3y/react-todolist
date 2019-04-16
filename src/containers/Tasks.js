import React from "react";
import '../App.css';
import TextInput from "../components/TextInput";
import List from "../components/List";
import Storage from "../Storage";
import cogoToast from 'cogo-toast';


class Tasks extends React.Component {

  constructor(props){
    super(props);
    this.storage = new Storage();

    this.state = {
      tasks: []
    }

    this.storage.getTasks()
          .then(tasks => this.setState({ tasks: tasks }))
          .catch(error => console.error('Nenhuma tarefa salva no LocalStorage'))

  }

  componentDidUpdate(){
    this.storage.setTasks(this.state.tasks)
  }

  newTask(title){
    let task = {
      title: title,
      progress: 0,
      done: false,
      date: new Date()
    }

    this.setState({
      tasks: [ task, ...this.state.tasks ]
    })

    cogoToast.info('Tarefa adicionada')
  }

  deleteTask(id){
    this.setState({
      tasks: [...this.state.tasks.filter((task, index) => index !== id)]
    })

    cogoToast.success('Tarefa deletada')
  }

  progressTask(id){
    this.setState({
      tasks: [...this.state.tasks.map((task, index) => (index === id) ? { ...task, progress: task.progress + 25 } : task)]
    })

  }

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