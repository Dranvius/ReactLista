import { useContext } from "react";
import { Context } from "../context/ProyectoContext";

export function AñadirTarea({ funcion, lista }) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();

        const newTask = {
          title: e.target[0].value,
          description: e.target[1].value,
          id: lista.length,
        };
        funcion(newTask);
      }}
    >
      <input type="text" placeholder="¿Cuál es el nombre de su tarea?"  autoFocus/>
      <input type="text" placeholder="¿Cuál es la descripción de su tarea?" />

      <button> Guardar </button>
    </form>
  );
}
