import React from "react";
import { useForm } from "react-hook-form";
import { FormTextField } from "./FormTextField";
import { TextField } from "../TextField/TextField";
// import {  } from "./FormTextField.levers";

export default {
  title: "Form Elements/Text Field",
  component: FormTextField,
  subcomponent: { TextField },
};

const FormTextFieldTemplate = ({ ...rest }) => {
  const { control } = useForm({
    defaultValues: { textValue: "" },
  });
  const onSubmit = (data) => console.log(data);
  return (
    <>
      <FormTextField {...rest} control={control} />
      <button
        className="su-bg-digital-red su-text-white su-p-10 su-mt-10"
        type="button"
        onClick={onSubmit}
      >
        Submit
      </button>
    </>
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
