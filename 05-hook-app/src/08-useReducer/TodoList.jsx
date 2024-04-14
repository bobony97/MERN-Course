import { TodoItem } from "./TodoItem";

//Vamos a renderizar los "todos" enviados desde el state en el componente padre "TodoApp"
export const TodoList = ({ todos = [], onDeleteTodo, onToggleTodo }) => {  //Recibimos el "dispatch" con la accion y se lo reenviamos al componente hijo
  return (
    <ul className="list-group">
      {todos.map((todo) => ( //Recorremos los "todos"
        <TodoItem
          key={ todo.id } 
          todo={ todo } 
          onDeleteTodo={ onDeleteTodo }  //Enviamos al componente hijo el "id" de los "todos" y los "todos" uno por uno
          onToggleTodo={ onToggleTodo }
        /> 
      ))}
    </ul>
  );
};
