import React from "react";
import PropTypes from "prop-types";
// import { dcnb } from "cnbuilder";
import { Controller } from "react-hook-form";
import { TextField } from "../TextField/TextField";
// import {} from "./FormTextField.levers";

/**
 * Text Input  Component
 *
 */
export const FormTextField = ({ name, control, ...props }) => (
  <Controller
    name={name}
    control={control}
    render={({
      field: { onChange, value },
      fieldState: { error },
      formState: { isValid },
    }) => (
      <TextField
        onChange={(e) => onChange(e.target.value)}
        errorText={error ? "Error!" : null}
        error={error}
        value={value}
        {...props}
      />
    )}
  />
);

FormTextField.propTypes = {
  /**
   * Text Field Name
   */
  name: PropTypes.string,
};
// Default Props.
// -----------------------------------------------------------------------------
FormTextField.defaultProps = {};
