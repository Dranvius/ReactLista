//!Crear una lista de tareas
//*Esta Funcionando

import { useContext } from "react";
import { Context } from "../context/ProyectoContext";

export function Tarea() {

  const ContextoVariableFuncional = useContext(Context);

  
  console.log(ContextoVariableFuncional);

  /*
    Cuidado con el uso de los arraies con react
    Tener presente esto () {}
    */
  if (tasks.length === 0) {
    return <h1>No hay tareas</h1>;
  } else
    return (
      <div>
        {ContextoVariableFuncional.tasks.map((task, i) => (
          <div key={i}>
            <u>
              <h1>{task.title}</h1>
            </u>
            <h2>{task.description}</h2>
            <h2>{task.id}</h2>
          </div>
        ))}
      </div>
    );
}
