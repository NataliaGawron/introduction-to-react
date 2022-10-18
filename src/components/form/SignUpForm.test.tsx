import React from "react";
import { screen, render } from "@testing-library/react";
import SignUpForm from "./SignUpForm";

it("renders first name label", () => {
  render(<SignUpForm />);
  const linkElement = screen.getByText(/first name/i);
  expect(linkElement).toBeInTheDocument();
});
