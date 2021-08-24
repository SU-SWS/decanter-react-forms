import React from "react";
import { TextField } from "./TextField";

export default {
  title: "Composite/Text Field",
  component: TextField,
  argTypes: {},
};

const TextFieldTemplate = ({ ...rest }) => <TextField {...rest} required />;

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

export const Password = TextFieldTemplate.bind({});
Password.args = {
  id: "su-text",
  label: "Password",
  weight: "bold",
  helperText: "Helper text lorem ipsum",
  placeholder: "Placeholder",
  type: "password",
  maxLength: 8,
};
Password.storyName = "Password Text Field";

export const Email = TextFieldTemplate.bind({});
Email.args = {
  id: "su-text",
  label: "Email",
  weight: "bold",
  helperText: "Helper text lorem ipsum",
  placeholder: "Placeholder",
  type: "email",
  required: true,
};
Email.storyName = "Required Email Text Field";
