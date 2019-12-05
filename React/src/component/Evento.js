import React from "react";

const Evento = ({ evento, eliminarEvento }) => (
  <div className="media mt-3">
    <div className="media-body">
      <h3 className="mt-0">{evento.mascota}</h3>
      <p className="card-text">
        <span>Nombre: </span> {evento.nombre}
      </p>
      <p className="card-text">
        <span>Apellido: </span> {evento.apellido}
      </p>
      <p>
        <span>Fecha</span> {evento.fecha}
      </p>
      <p>
        <span>Hora</span> {evento.hora}
      </p>
      <p>
        <span>Nº de evento: </span> {evento.idEvento}
      </p>

      <button
        className="btn btn-danger"
        onClick={() => eliminarEvento(evento.id)}
      >
        Borrar &times;
      </button>
    </div>
  </div>
);

export default Evento;
