import { useState, useEffect } from "react";

import { task as data, task } from "./Task";

//!Crear una lista de tareas

console.log(data);

export function Tarea() {
  const [tasks, setTasks] = useState([]);

    useEffect(()=>{
        setTasks(data)
    },[])

    if(tasks === 0){
        return <h1>No hay tareas</h1>
    }

  return (
    <div>
      {data.map((task,i) => ( 
        <div key={i}>
            <u><h1>{task.title}</h1></u>
            <h2>{task.description}</h2>
        </div>
      ))}
    </div>
  );
}
