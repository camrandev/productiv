import React from "react";
import { render } from "@testing-library/react";
import TodoApp from "./TodoApp";

describe('Snapshot test', () => {
  it('renders correctly', () => {
    const { container } = render(<TodoApp />);
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe("productiv app", function () {
  it("renders without crashing", function () {
    render(<App />);
  });

  it("contains expected title", function () {
    const result = render(<App />);
    expect(result.queryByText("Prøductïv")).toBeInTheDocument();
  });

  it ("rendered quotes app", function () {
    const result = render(<App />);
    expect(result.queryByText("Click here for an inspirational quøte!")).toBeInTheDocument();
  });
});