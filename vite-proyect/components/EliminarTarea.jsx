//!El componente debe borrar tarea por medio de su id

export function EliminarTarea({ funcion }) {

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        funcion(parseInt(e.target[0].value));
      }}
    >
      <input type="number" placeholder="ID que desea eliminar" />

      <button> Eliminar </button>
    </form>
  );
}
