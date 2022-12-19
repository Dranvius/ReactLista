import {useEffect,useState} from 'react'

export function AñadirTarea({funcion}) {

  


  return (
  
    <form onSubmit={(e) =>{
      e.preventDefault();

      const newTask = {
        title: e.target[0].value,
        description: e.target[1].value
      }

      console.log(newTask)

      funcion(newTask);


    }}>

    <input type="text" placeholder='¿Cuál es el nombre de su tarea?' />
    <input type="text" placeholder='¿Cuál es la descripción de su tarea?'/>

    <button> Guardar </button>

    </form>

  )
}

