import React from "react";
import { render } from "@testing-library/react";
import Header from "./Header";

describe('Snapshot test', () => {
  it('renders correctly', () => {
    const { container } = render(<Header />);
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe("productiv Header", function () {
  it("renders without crashing", function () {
    render(<Header />);
  });

  it("contains expected title", function () {
    const result = render(<Header />);
    expect(result.queryByText("Prøductïv")).toBeInTheDocument();
  });

  it ("rendered quotes Header", function () {
    const result = render(<Header />);
    expect(result.queryByText("Click here for an inspirational quøte!")).toBeInTheDocument();
  });
});

