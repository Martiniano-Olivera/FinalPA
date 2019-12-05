import React, { Component } from "react";
import uuid from "uuid";

const stateInicial = {
  evento: {
    nombre: "",
    apellido: "",
    fecha: "",
    hora: "",
    idEvento: ""
  },
  error: false
};
class NuevoEvento extends Component {
  state = { ...stateInicial };

  handleChange = e => {
    // colocar lo que el usuario escribe en el state
    this.setState({
      evento: {
        ...this.state.evento,
        [e.target.name]: e.target.value
      }
    });
  };
  // cuando el usuario envia el formulario
  handleSubmit = e => {
    e.preventDefault();

    //extraer los valores del state
    const { nombre, apellido, fecha, hora, idEvento } = this.state.evento;

    //validar que todos los campos esten llenos
    if (
      nombre === "" ||
      apellido === "" ||
      fecha === "" ||
      hora === "" ||
      idEvento === ""
    ) {
      this.setState({
        error: true
      });

      // detener la ejecucion
      return;
    }

    // generar objeto con los datos
    const nuevoEvento = { ...this.state.evento };
    nuevoEvento.id = uuid();

    // agragar la evento al state de App
    this.props.crearNuevoEvento(nuevoEvento);

    //colocar en el state el stateInicial
    this.setState({
      ...stateInicial
    });
  };

  render() {
    /// extrar valor del state
    const { error } = this.state;
    return (
      <div className="card mt-5 py-5">
        <div className="card-body">
          <h2 className="card-title text-center mb-5">
            Llene el formulario para controlar un nuevo evento
          </h2>
          {error ? (
            <div
              className="alert alert-danger mt-2 mb-5 
                    text-center"
            >
              Todos los campos son obligatorios
            </div>
          ) : null}
          <form onSubmit={this.handleSubmit}>
            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">
                Nombre de empleado
              </label>
              <div className="col-sm-8 col-lg-10">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre empleado"
                  name="nombre"
                  onChange={this.handleChange}
                  value={this.state.evento.nombre}
                />
              </div>
            </div>

            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">
                Apellido empleado:
              </label>
              <div className="col-sm-8 col-lg-10">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Apellido empleado"
                  name="apellido"
                  onChange={this.handleChange}
                  value={this.state.evento.apellido}
                />
              </div>
            </div>
            {/*form-group */}

            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">Fecha</label>
              <div className="col-sm-8 col-lg-4">
                <input
                  type="date"
                  className="form-control"
                  name="fecha"
                  onChange={this.handleChange}
                  value={this.state.evento.fecha}
                />
              </div>
            </div>
            {/*form-group */}

            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">Hora</label>
              <div className="col-sm-8 col-lg-4">
                <input
                  type="time"
                  className="form-control"
                  name="hora"
                  onChange={this.handleChange}
                  value={this.state.evento.hora}
                />
              </div>
            </div>
            {/*form-group */}

            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">
                Nº de evento
              </label>
              <div className="col-sm-8 col-lg-10">
                <textarea
                  type="text"
                  className="form-control"
                  placeholder="Nº evento"
                  name="idEvento"
                  onChange={this.handleChange}
                  value={this.state.evento.idEvento}
                />
              </div>
            </div>

            <input
              type="submit"
              className="py-3 mt-2 btn btn-success btn-block"
              value="Agregar nuevo evento"
            />
          </form>{" "}
          {/*form-group */}
        </div>
      </div>
    );
  }
}

export default NuevoEvento;
