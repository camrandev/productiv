import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TodoApp from "./TodoApp";
import dummyData from "./dummyData";

describe("Snapshot test", () => {
  it("renders correctly", () => {
    const { container } = render(<TodoApp initialTodos={dummyData} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe("TodoApp renders without crashing with todos", function () {
  it("renders without crashing", function () {
    render(<TodoApp initialTodos={dummyData} />);
  });

  test("TodoApp renders without crashing without todos", () => {
    const result = render(<TodoApp initialTodos={[]} />);
    expect(result.queryByText("You have no todos.")).toBeInTheDocument();
  });

  test("When no todos, case specific elements and text are displayed", () => {
    const result = render(<TodoApp initialTodos={[]} />);
    expect(result.queryByText("You have no todos.")).toBeInTheDocument();
    expect(result.queryByText("Top Todo")).not.toBeInTheDocument();
  });

  test("When rendered with todos, expected elements are displayed", () => {
    const result = render(<TodoApp initialTodos={dummyData} />);
    expect(result.queryByText("You have no todos.")).not.toBeInTheDocument();
    expect(result.queryByText("Top Todo")).toBeInTheDocument();
    expect(result.queryByText("Add Nü")).toBeInTheDocument();

    expect(
      result.container.getElementsByClassName("TodoApp").length
    ).toBeGreaterThan(0);
  });

  //what in this component is being interacted with

  //clicking on edit
  //should open the edit box, with proper text
  //should be able to eddit
  //should be able to change priority of current top
  //and have different top to do

  //deleting a todo
  //render the app with one todo
  //fire event on delete button
  //expect todo text not NOT to be in doc
  //expect "you have no todos" to be in doc
  //expect top todo to NOT be in the
});

describe("User is able to add todos", function () {
  //adding a new todo
  //should display properly
  //should increase the length of the todo list
  //adding a new todo with higher priority than current top
  test("add todo element renders and works as expected", () => {
    const { container } = render(<TodoApp initialTodos={[]} />);
    expect(container.querySelector("span")).toContainHTML("You have no todos.");
    expect(container.querySelector("Top Todo")).not.toBeInTheDocument();

    const titleInput = container.querySelector("newTodo-title");
    console.log(titleInput)
    const descriptionInput = container.querySelector("newTodo-description");
    const priorityInput = container.querySelector("newTodo-priority");
    const submitBtn = container.querySelector("NewTodoForm-addBtn");

    fireEvent.change(titleInput, { target: { value: "test" } });
    fireEvent.change(descriptionInput, { target: { value: "test" } });
    fireEvent.change(priorityInput, { target: { value: "Ultra-Über" } });



    const addButton = container.querySelector("NewTodoForm-addBtn");
    // fireEvent.click(rightArrow);

    // expect(result.queryByText("Top Todo")).toBeInTheDocument();
    // expect(result.queryByText("Add Nü")).toBeInTheDocument();

    // expect(
    //   result.container.getElementsByClassName("TodoApp").length
    // ).toBeGreaterThan(0);
  });
});
