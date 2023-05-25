import React from "react";

import Todo from "./Todo";

/** Shows the top todo.
 *
 * Props:
 * - todos
 *
 * TodoApp -> TopTodo
 */

function TopTodo({ todos }) {
  // lowest-priority # is the highest priority
  // let top = todos.reduce(
  //   (acc, cur) => (cur.priority < acc.priority ? cur : acc),
  //   todos[0]
  // );

  //stub data to render until further functionality is achieved
  let top = {
    id: 1,
    title: "Code!",
    description: "Write some code",
    priority: 2,
  }

  //returns a single todo (non-editable) passing in the top attributes as props
  return (
    <Todo
      id={top.id}
      title={top.title}
      description={top.description}
      priority={top.priority}
    />
  );
}

export default TopTodo;
