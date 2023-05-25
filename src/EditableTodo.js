import React, { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

/** Show editable todo item.
 *
 * Props
 * - todo
 * - update(): fn to call to update a todo
 * - remove(): fn to call to remove a todo
 *
 * EditableTodoList -> EditableTodo -> { Todo, TodoForm }
 */

function EditableTodo({ todo, update, remove }) {
  const [isEditing, setIsEditing] = useState(false);
  const { id, title, description, priority } = todo

  /** Toggle if this is being edited */
  function toggleEdit() {}

  /** Call remove fn passed to this. */
  function handleDelete() {
    remove(todo.id);
  }

  /** Edit form saved; toggle isEditing and update in ancestor. */
  function handleSave(formData) {}

  return (
    //need to conditionally render these...based on what?
    <div className="EditableTodo">
      {isEditing && <TodoForm />}
      {/* going to need to pass down the save and the todo to the form */}
      {!isEditing &&
      <div className="mb-3">
        <div className="float-end text-sm-end">
          <button
            className="EditableTodo-toggle btn-link btn btn-sm"
            onClick={toggleEdit}
          >
            Edit
          </button>
          <button
            className="EditableTodo-delBtn btn-link btn btn-sm text-danger"
            onClick={handleDelete}
          >
            Del
          </button>
        </div>
        <Todo id={id} title={title} description={description} priority={priority} />
      </div>}
    </div>
  );
}

export default EditableTodo;
