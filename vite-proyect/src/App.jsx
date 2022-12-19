import { task as data, task } from "./task";
import { Tarea } from "./Tarea";
import { AñadirTarea } from "./AñadirTarea";
import { useState} from "react";
import { useEffect } from "react";

export function App() {
  
  const [tasks, setTasks] = useState([]);

    useEffect(() => {
      setTasks(data)
    },[]);
    
   
    const añadirTarea = (tarea) => {

      setTasks([... tasks,tarea]) 

      console.log(tasks)

    };

    return (
      <>
        
        <AñadirTarea funcion={añadirTarea} />
        <Tarea tasks = {tasks} />
       
      </>
    );
  }

  
