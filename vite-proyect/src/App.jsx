import { task as data, task } from "./data/task";
import { Tarea } from "../components/Tarea";
import { AñadirTarea } from "../components/AñadirTarea";
import { useState } from "react";
import { useEffect } from "react";
import { EliminarTarea } from "../components/EliminarTarea";

export function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data);
  }, []);

  const añadirTarea = (tarea) => {
    setTasks([...tasks, tarea]);
  };

  const eliminarTarea = (id) => {
    let arr = tasks;

    setTasks(arr.filter(tarea => tarea.id != id));

  };

  return (
    <>
      <Tarea tasks={tasks} />
      <AñadirTarea funcion={añadirTarea} lista={tasks} />
      <EliminarTarea funcion={eliminarTarea} />
    </>
  );
}
