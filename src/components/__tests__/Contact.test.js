import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

test("Should Load Contact Us Component", () => {
  render(<Contact />);

  const heading = screen.getByRole("heading");

  //Assertion
  expect(heading).toBeInTheDocument();
});

test("Should Load Button inside the Contact Us Component", () => {
  render(<Contact />);

  const button = screen.getByRole("button");

  //Assertion
  expect(button).toBeInTheDocument();
});

test("Should Load Input name inside the Contact Us Component", () => {
  render(<Contact />);

  const inputName = screen.getByPlaceholderText("Name");

  //Assertion
  expect(inputName).toBeInTheDocument();
});

test("Should Load Two Input name inside the Contact Us Component", () => {
  render(<Contact />);

  //Querying
  const inputBoxes = screen.getAllByRole("textbox");

  // Assertion to check if the exact number of expected textboxes are present
  expect(inputBoxes.length).toBe(2);
});
