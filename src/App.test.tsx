import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

it("renders sign up title", () => {
  render(<App />);
  const linkElement = screen.getByText(/sign up/i);
  expect(linkElement).toBeInTheDocument();
});
