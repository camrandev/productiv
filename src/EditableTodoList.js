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

function EditableTodoList({todos, update, remove}) {

  //needs a render function similarly to what I did in the boxes project
  return (
      <div>
        {/*   FIXME  */}
        <EditableTodo />
        <EditableTodo />
        <EditableTodo />
      </div>
  );
}

export default EditableTodoList;
