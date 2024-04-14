export const TodoItem = ({ todo, onDeleteTodo, onToggleTodo }) => {  //Recibimos el "todo" del padre. / Recibimos el dispatch con la accion de eliminar un "todo" / Recibimos el onToggleTodo del padre
  return (
    <li className="list-group-item d-flex justify-content-between">
      <span 
      className={`align-self-center ${todo.done && `text-decoration-line-through` } `} //Si el "todo.done === true" va a tachar el "todo.description"
      onClick={ () => onToggleTodo(todo.id) }
      >
        { todo.description } {/*Reenderizamos el "todo" */}
      </span> 
      <button
        className="btn btn-danger"
        onClick={() =>  onDeleteTodo(todo.id) }  //Eliminamos el "todo" por "id"
      >
        Borrar
      </button>
    </li>
  );
};
