import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { task } from "./Task";

//!Crear una lista de tareas

function App() {
  const [variable, setVariable] = useState([]);

  useEffect(() => {
    setVariable(task);
  }, [])

  console.log(variable.length);

  if (variable.length === 0) {
    return <h1>No hay tareas</h1>
  }else{

    return (
      <div id="ImHere">
        {task.map((tarea, i) => {
          <div key={i}>
            console.log(tarea.title)
            <h1>{tarea.title}</h1>
            <h6>{tarea.description}</h6>
          </div>;
        })}
      </div>
    );
  }

  
}

export default App;
