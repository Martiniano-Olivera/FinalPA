import React, { Component } from "react";
import "./bootstrap.min.css";

import Header from "./component/Header";
import NuevoEvento from "./component/NuevoEvento";
import ListaEventos from "./component/ListaEventos";

class App extends Component {
  state = {
    eventos: []
  };

  // Cuando la aplicacion se carga
  componentDidMount() {
    const eventosLS = localStorage.getItem("eventos");
    if (eventosLS) {
      this.setState({
        eventos: JSON.parse(eventosLS)
      });
    }
  }

  // cuando eliminanos o agregamos una nueva evento
  componentDidUpdate() {
    localStorage.setItem("eventos", JSON.stringify(this.state.eventos));
  }

  crearNuevoEvento = datos => {
    //console.log(datos);
    //copiar el state actual
    const eventos = [...this.state.eventos, datos];

    // agregar el nuevo state
    this.setState({
      eventos
    });
  };

  // elimina las eventos del state
  eliminarEvento = id => {
    console.log(id);
    // tomar una copia del state
    const eventosActuales = [...this.state.eventos];
    const eventos = eventosActuales.filter(evento => evento.id !== id);

    this.setState({
      eventos
    });
  };

  render() {
    return (
      <div className="container">
        <Header titulo="Administrador  de Eventos" />
        <NuevoEvento crearNuevoEvento={this.crearNuevoEvento} />

        <ListaEventos
          eventos={this.state.eventos}
          eliminarEvento={this.eliminarEvento}
        />
      </div>
    );
  }
}

export default App;
