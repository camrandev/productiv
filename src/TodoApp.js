import React, { useState } from "react";
import { v4 as uuid } from "uuid";

import TopTodo from "./TopTodo";
import EditableTodoList from "./EditableTodoList";
import TodoForm from "./TodoForm"

/** App for managing a todo list.
 *
 * Props:
 * - initialTodos: possible array of [ todo, ... ]
 *
 * State:
 * - todos: array of [ todo, ... ]
 *
 * App -> TodoApp -> { TodoForm, EditableTodoList }
 */

function TodoApp({ initialTodos }) {
  //list of to do live here
  const [todos, setTodos] = useState(initialTodos);

  /** add a new todo to list */
  function create(newTodo) {
    let nTodo = { ...newTodo, id: uuid() };
    setTodos((todos) => [...todos, nTodo]);
  }

  /** update a todo with updatedTodo */
  //TODO: write the real version of this function
  function update(updatedTodo) {
    console.log('hi')
  }

  /** delete a todo by id */
  function remove(id) {
    setTodos((curr) => curr.filter((todo) => todo.id !== id));
  }

  return (
    <main className="TodoApp">
      <div className="row">
        <div className="col-md-6">
          {todos.length > 0 && <EditableTodoList todos={todos} update={update} remove={remove} />} OR
          {todos.length === 0 && (
            <span className="text-muted">You have no todos.</span>
          )}
        </div>

        <div className="col-md-6">
          {todos.length > 0 && (
            <section className="mb-4">
              <h3>Top Todo</h3>
              <TopTodo />
            </section>
          )}

          <section>
            <h3 className="mb-3">Add Nü</h3>
            <TodoForm handleSave={create}/>
          </section>
        </div>
      </div>
    </main>
  );
}

export default TodoApp;
