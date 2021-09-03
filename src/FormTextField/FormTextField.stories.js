import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { FormTextField } from "./FormTextField";
import { TextField } from "../TextField/TextField";
// import {  } from "./FormTextField.levers";

export default {
  title: "Form Elements/Text Field",
  component: FormTextField,
  subcomponents: { TextField },
};

const FormTextFieldTemplate = ({ ...props }) => {
  const methods = useForm();
  const { control, handleSubmit } = methods;
  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <FormTextField {...props} control={control} />
      <input
        className="su-bg-digital-red su-text-white su-p-10 su-mt-10"
        type="submit"
      />
    </form>
  );
};

export const Default = FormTextFieldTemplate.bind({});
Default.args = {
  name: "textValue",
  label: "Text Field",
  id: "su-text",
  fontWeight: "bold",
  helperText: "Helper text lorem ipsum",
  placeholder: "Placeholder",
  type: "text",
};
Default.storyName = "Default Text Field";

export const Password = FormTextFieldTemplate.bind({});
Password.args = {
  name: "passwordValue",
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
