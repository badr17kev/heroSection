// src/Hello.test.jsx
import { render, screen } from "@testing-library/react";
import { Hello } from "./Hello";

test("shows the name", () => {
  render(<Hello name="Badr" />);
  expect(screen.getByText("Hello Badr")).toBeInTheDocument();
});
