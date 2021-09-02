import React from "react";
// import PropTypes from "prop-types";
// import { dcnb } from "cnbuilder";
import { Controller } from "react-hook-form";
import { TextField } from "../TextField/TextField";
// import {} from "./FormTextField.levers";

/**
 * Text Input  Component
 *
 */
export const FormTextField = ({ name, control, label, error }, props) => {
  // Defaults & Variables.
  // ---------------------------------------------------------------------------
  const placeholder = "";

  return (
    <Controller
      name={name}
      control={control}
      render={({ onChange }) => (
        <TextField
          label={label}
          onChange={onChange}
          errorText={error ? "Error!" : null}
          error={error}
          {...props}
        />
      )}
    />
  );
};

FormTextField.propTypes = {};
// Default Props.
// -----------------------------------------------------------------------------
FormTextField.defaultProps = {};
