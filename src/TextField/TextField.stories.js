import React from "react";
import { TextField } from "./TextField";
import { labelWeights, iconAlignment } from "./TextField.levers";

export default {
  title: "Composite/Text Field",
  component: TextField,
  argTypes: {
    labelWeights: {
      control: {
        type: "select",
        options: labelWeights,
      },
    },
    iconAlignment: {
      control: {
        type: "select",
        options: iconAlignment,
      },
    },
  },
};

const TextFieldTemplate = ({ ...rest }) => <TextField {...rest} required />;

export const Default = TextFieldTemplate.bind({});
Default.args = {
  id: "su-text",
  label: "Text Field",
  fontWeight: "bold",
  helperText: "Helper text lorem ipsum",
  placeholder: "Placeholder",
  type: "text",
};
Default.storyName = "Default Text Field";

export const Disabled = TextFieldTemplate.bind({});
Disabled.args = {
  id: "su-text",
  label: "Disable Text Field",
  fontWeight: "bold",
  helperText: "Helper text lorem ipsum",
  placeholder: "Placeholder",
  type: "text",
  isDisabled: true,
};
Disabled.storyName = "Disabled Text Field";

export const Email = TextFieldTemplate.bind({});
Email.args = {
  id: "su-text",
  label: "Email",
  fontWeight: "bold",
  placeholder: "Jane@stanford.edu",
  type: "email",
  isIcon: true,
};
Email.storyName = "Email Field";

export const ReqEmail = TextFieldTemplate.bind({});
ReqEmail.args = {
  id: "su-text",
  label: "Email",
  fontWeight: "bold",
  placeholder: "Jane@stanford.edu",
  type: "email",
  isRequired: true,
};
ReqEmail.storyName = "Required Email Field";

export const Password = TextFieldTemplate.bind({});
Password.args = {
  id: "su-text",
  label: "Password",
  fontWeight: "bold",
  helperText: "Helper text lorem ipsum",
  placeholder: "Password",
  type: "password",
  maxLength: 8,
  showCharCount: true,
};
Password.storyName = "Password Text Field";

export const Date = TextFieldTemplate.bind({});
Date.args = {
  id: "su-text",
  label: "Date",
  fontWeight: "bold",
  helperText: "Choose a date",
  type: "date",
};
Date.storyName = "Date Field";

export const Error = TextFieldTemplate.bind({});
Error.args = {
  id: "su-text",
  label: "Error Text Field",
  placeholder: "Placeholder",
  type: "text",
  isError: true,
  errorText: "Error: Lorem ipsum message here!",
};
Error.storyName = "Error Text Field";

export const Valid = TextFieldTemplate.bind({});
Valid.args = {
  id: "su-text",
  label: "Valid Text Field",
  placeholder: "Placeholder",
  type: "text",
  isValid: true,
};
Valid.storyName = "Valid Text Field";
