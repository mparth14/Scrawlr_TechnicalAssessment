import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Upvote from "./Upvote";

test("toggles selection state on click", () => {
  const handleClick = jest.fn();
  render(<Upvote isSelected={false} onClick={handleClick} />);

  const button = screen.getByRole("button");
  const arrow = button.querySelector("path");

  expect(button).toHaveStyle("background-color: #F4F6F8");
  expect(arrow).toHaveAttribute("fill", "#343A40");

  fireEvent.click(button);

  expect(handleClick).toHaveBeenCalledTimes(1);
});
