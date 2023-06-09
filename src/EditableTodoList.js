import React from "react";
import EditableTodo from "./EditableTodo";

/** Show list of editable todos.
 *
 * Props:
 * - todos: array of [ todo, ... ]
 * - update(): fn to call to update a todo
 * - remove(): fn to call to remove a todo
 *
 * TodoApp -> EditableTodoList -> [ EditableTodo, ... ]
 */

function EditableTodoList({ todos, update, remove }) {
  function renderTodos() {
    return (
      <ul>
        {todos.map((todo) => (
          <EditableTodo
            key={todo.id}
            todo={todo} //todo object { id, title, description, priority }
            update={update}
            remove={remove}
          />
        ))}
      </ul>
    );
  }

  return <div>{renderTodos()}</div>;
}

export default EditableTodoList;
