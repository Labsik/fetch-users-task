import { render, screen, fireEvent } from "@testing-library/react";
import { Button } from "../Button";

describe("Button component", () => {
  test("renders with provided text", () => {
    render(<Button onClick={() => {}}>Click Me</Button>);
    expect(
      screen.getByRole("button", { name: /click me/i })
    ).toBeInTheDocument();
  });

  test("calls onClick handler when clicked", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Press</Button>);
    fireEvent.click(screen.getByRole("button", { name: /press/i }));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
