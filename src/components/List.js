import React from "react";

/**
 * Exemplo de um componente Stateless, componente sem estado.
 * Serve somente para renderizar um pequeno trecho de código, nesse caso o item da lista
 * @param {*} props 
 */
const Item = (props) => (
  <div className="item list-group-item">
    <div className="row">
      <div className="col-7"> { props.title } </div>
      <div className="col-5 actions">
        <button class="btn btn-danger">Deletar</button>
        <button class="btn btn-primary">Avançar</button>
        <button class="btn btn-success">Concluir</button>
      </div>
    </div>
    <div class="progress">
      <div class="progress-bar" role="progressbar" style={{ width: "25%" }} aria-valuenow="40" aria-valuemin="40" aria-valuemax="100"></div>
    </div>
  </div>
)


class List extends React.Component {
  render(){
    return (
      <section className="list-group list-task">
        <Item title="Tarefa Exemplo 01" />
        <Item title="Tarefa Exemplo 01" />
        <Item title="Tarefa Exemplo 01" />

      </section>
    )
  }
}

export default List;