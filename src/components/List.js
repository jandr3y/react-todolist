import React from "react";
import ReactEmoji from "react-emoji";
import TimeAgo from "react-timeago";
import ptBrSettings from "react-timeago/lib/language-strings/pt-br";
import buildFormatter from "react-timeago/lib/formatters/buildFormatter";

const formatter = buildFormatter(ptBrSettings);

/**
 * Exemplo de um componente Stateless, componente sem estado.
 * Serve somente para renderizar um pequeno trecho de código, nesse caso o item da lista que acabou sendo bastante código
 * mas de qualquer forma ele não tem estado, então posso criar dessa forma ele. (sempre importanto o React no começo do arquivo (embora "não extenda"))
 * @param {*} props 
 */
const Item = (props) => (
  <div className="item list-group-item">
    <div className="row">
      <div className={"col-7 " + (props.done ? "done-title" : "title")}>
        { ReactEmoji.emojify(props.title) } 
        <br />
        <TimeAgo date={props.date.getTime()} formatter={formatter} />
      </div>
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

  render(){

    let { data, onDelete, onProgress, onDone } = this.props;

    return (
      <section className="list-group list-task">
      {
        (data.length > 0) 
        ? data.map((task, index) => <Item
                                  key={index}  
                                  title={task.title}
                                  date={task.date}
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