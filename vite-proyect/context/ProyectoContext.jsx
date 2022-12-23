import { createContext } from "react";
import { useState, useEffect } from "react";
import { task as data } from "../src/data/task";

export const Context = createContext();

export function ProyectoContext(props) {
  // const [tasks, setTasks] = useState();

  const [Task, setTask] = useState([]);

  


  // useEffect(() => {
  //   setTask(data);
  // }, []);

  useEffect(() => {
    setTask("hola")
  }, []);

  
  //*Funciones para exportar

  //?Eliminar tarea
  const eliminarTarea = (id) => {
    let arr = tasks;

    setTasks(arr.filter((tarea) => tarea.id != id));
  };

  //?Agregar tarea
  const añadirTarea = (tarea) => {
    setTasks([...tasks, tarea]);
  };


  return (
    <Context.Provider
      value={{
        Task,
        eliminarTarea,
        añadirTarea,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}
