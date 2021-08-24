import React from "react";
import { TextField } from "./TextField";

export default {
  title: "Composite/Text Field",
  component: TextField,
  argTypes: {},
};

const TextFieldTemplate = ({ ...rest }) => <TextField {...rest} />;

export const Default = TextFieldTemplate.bind({});
Default.args = {
  id: "su-text",
  label: "Text Field",
  weight: "bold",
  helperText: "Helper text lorem ipsum",
  placeholder: "Placeholder",
  type: "text",
};
Default.storyName = "Default Text Field";
