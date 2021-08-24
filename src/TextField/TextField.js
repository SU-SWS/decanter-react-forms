import React from "react";
import PropTypes from "prop-types";
import { dcnb } from "cnbuilder";
import { labelWeights } from "./TextField.levers";

/**
 * Text Input  Component
 *
 */
export const TextField = (
  { className, id, label, weight, helperText, placeholder, type },
  props
) => {
  // Defaults & Variables.
  // ---------------------------------------------------------------------------
  const levers = {};

  // Levers
  // ---------------------------------------------------------------------------

  // props.weight
  if (weight && weight in labelWeights) {
    levers.weight = labelWeights[weight];
  }

  return (
    <div className={className}>
      <label htmlFor={id} className={dcnb(levers.weight, "su-label su-mb-5")}>
        {label}
      </label>
      {helperText && <p className="su-color-cool-grey su-mb-5">{helperText}</p>}
      <input
        id={id}
        className="su-input su-border-b-2 su-rounded su-px-7 su-pt-7 su-pb-8"
        type={type}
        placeholder={placeholder}
        {...props}
      />
    </div>
  );
};

TextField.propTypes = {
  /**
   * Css class names
   */
  className: PropTypes.string,

  /**
   * Label and Input id
   */
  id: PropTypes.string,

  /**
   * Label Text
   */
  label: PropTypes.string,

  /**
   * Help Text
   */
  helperText: PropTypes.string,

  /**
   * Input Placeholder Text
   */
  placeholder: PropTypes.string,

  /**
   * Input Type
   */
  type: PropTypes.string,

  /**
   * Font weight.
   */
  weight: PropTypes.oneOf(Object.keys(labelWeights)),
};
// Default Props.
// -----------------------------------------------------------------------------
TextField.defaultProps = {};
