import React from "react";

/**
 * Exemplo de um componente Stateless, componente sem estado.
 * Serve somente para renderizar um pequeno trecho de código, nesse caso o item da lista
 * @param {*} props 
 */
const Item = (props) => (
  <div className="item list-group-item">
    <div className="row">
      <div className={"col-7 " + (props.done ? "done-title" : "")}> { props.title } </div>
      <div className="col-5 actions">
        <button className="btn btn-danger" onClick={props.onDelete}>Deletar</button>
        { (props.progress < 75) 
          ? <button className="btn btn-primary" onClick={props.onProgress}>Avançar</button>
          : (!props.done) ? <button className="btn btn-success" onClick={props.onDone}>Concluir</button> : null
        }
      </div>
    </div>
    <div className="progress">
      <div  className={"progress-bar " + (props.done ? "bg-success" : "bg-primary")} 
            role="progressbar" 
            style={{ width: props.progress + "%" }} aria-valuenow="40" aria-valuemin="40" aria-valuemax="100"></div>
    </div>
  </div>
)


class List extends React.Component {

  constructor(props){
    super(props);
  }

  render(){

    let { data, onDelete, onProgress, onDone } = this.props;

    return (
      <section className="list-group list-task">
      {
        (data.length > 0) 
        ? data.map((task, index) => <Item
                                  key={index}  
                                  title={task.title}
                                  done={task.done}
                                  progress={task.progress}
                                  onDelete={() => onDelete(index)}
                                  onProgress={() => onProgress(index)}
                                  onDone={() => onDone(index)} />)
        : "Nenhuma tarefa registrada." 
      }
      </section>
    )
  }
}

export default List;