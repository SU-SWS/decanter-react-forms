/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { ErrorBox } from "./ErrorBox";

// Component is a component.
describe("ErrorBox", () => {
  // Is a component with valid syntax.
  it("is truthy", () => {
    expect(ErrorBox).toBeTruthy();
  });

  // Default is rendered.
  it("renders the Error Box in the default state", () => {
    render(<ErrorBox>Test Children</ErrorBox>);
    screen.getByText("Test Children"); // full string match
  });
});
