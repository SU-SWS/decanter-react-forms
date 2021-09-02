/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { FormTextField } from "./FormTextField";

// Component is a component.
describe("FormTextField", () => {
  // Is a component with valid syntax.
  it("is truthy", () => {
    expect(FormTextField).toBeTruthy();
  });

  // Default is rendered.
  it("renders the Text Field in the default state", () => {
    render(<FormTextField text="Test" />);
    screen.getByText("Test"); // full string match
  });
});
