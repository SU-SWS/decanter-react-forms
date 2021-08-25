import React, { useState } from "react";
import PropTypes from "prop-types";
import { dcnb } from "cnbuilder";
import { textFieldElements, labelWeights } from "./TextField.levers";

/**
 * Text Input  Component
 *
 */
export const TextField = (
  {
    className,
    element,
    id,
    label,
    fontWeight,
    helperText,
    placeholder,
    type,
    maxLength,
    minLength,
    errorText,
    rows,
    cols,
    isDisabled,
    isRequired,
  },
  props
) => {
  // Defaults & Variables.
  // ---------------------------------------------------------------------------
  let Element = "input";
  let elementClass = "su-input";
  let weight = "regular";

  // Levers
  // ---------------------------------------------------------------------------

  // Font Weight
  if (fontWeight && fontWeight in labelWeights) {
    weight = labelWeights[fontWeight];
  }

  // Element
  if (element) {
    Element = "textarea";
    elementClass = "su-textarea";
  }

  // Handle Character Counter
  // ---------------------------------------------------------------------------
  const [charCount, setCharCount] = useState(0);
  const handleOnChange = (e) => {
    setCharCount(e.target.value.length);
  };

  return (
    <div className={className}>
      <label htmlFor={id} className={dcnb(weight, "su-label su-mb-5")}>
        {isRequired ? "*" : ""}
        {label}
      </label>
      {helperText && <p className="su-color-cool-grey su-mb-5">{helperText}</p>}
      <Element
        id={id}
        className={dcnb(
          elementClass,
          "su-input su-border-b-2 su-rounded su-px-7 su-pt-7 su-pb-8 disabled:su-bg-cool-grey"
        )}
        type={type}
        placeholder={placeholder}
        maxLength={maxLength ?? null}
        minLength={minLength ?? null}
        rows={rows ?? null}
        cols={cols ?? null}
        disabled={isDisabled}
        required={isRequired}
        onChange={handleOnChange}
        {...props}
      />
      {maxLength ? (
        <p className="su-color-cool-grey su-pl-7">
          {charCount}/{maxLength}
        </p>
      ) : (
        ""
      )}
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
  fontWeight: PropTypes.oneOf(Object.keys(labelWeights)),

  /**
   * Is the input disabled?
   */
  isDisabled: PropTypes.bool,

  /**
   * Is the input required?
   */
  isRequired: PropTypes.bool,

  /**
   * Rows of Textarea
   */
  rows: PropTypes.number,

  /**
   * Cols of Textarea
   */
  cols: PropTypes.number,

  /**
   * Max Length of Input
   */
  maxLength: PropTypes.number,

  /**
   * Min Length of Input
   */
  minLength: PropTypes.number,
};
// Default Props.
// -----------------------------------------------------------------------------
TextField.defaultProps = {
  isRequired: false,
  isDisabled: false,
};
