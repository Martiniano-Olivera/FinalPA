import React from "react";
import Evento from "./Evento";

const ListaEventos = ({ eventos, eliminarEvento }) => (
  <div className="card mt-2 py-5">
    <div className="card-body">
      <h2 className="card-title text-center">Administra los eventos aqui</h2>
      <div className="lista-eventos">
        {eventos.map(evento => (
          <Evento
            key={evento.id}
            evento={evento}
            eliminarEvento={eliminarEvento}
          />
        ))}
      </div>
    </div>
  </div>
);

export default ListaEventos;
