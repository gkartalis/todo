import { screen, render } from "@testing-library/react";
import App from "./App";
// should be able to see the header with the correct text

describe("App", () => {
  it("should render the correct header", () => {
    const { debug } = render(<App />);
    debug();

    expect(screen.getByText("yolo")).toBeInTheDocument();
  });
});
