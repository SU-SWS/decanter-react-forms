import React, { useState } from "react";
import PropTypes from "prop-types";
import { dcnb } from "cnbuilder";
import { MailIcon, XIcon, CheckIcon } from "@heroicons/react/outline";
import { labelWeights, iconAlignment } from "./TextField.levers";

/**
 * Text Input  Component
 *
 */
export const TextField = (
  {
    className,
    id,
    label,
    fontWeight,
    helperText,
    placeholder,
    type,
    maxLength,
    minLength,
    errorText,
    isError,
    isValid,
    isIcon,
    iconPosition,
    isDisabled,
    isRequired,
    showCharCount,
  },
  props
) => {
  // Defaults & Variables.
  // ---------------------------------------------------------------------------
  const iconPositionStyle = iconAlignment[iconPosition];
  let weight = "regular";
  let disabledStyle = "";
  let errorInputStyle = "";

  // Levers
  // ---------------------------------------------------------------------------

  // Font Weight
  if (fontWeight && fontWeight in labelWeights) {
    weight = labelWeights[fontWeight];
  }

  if (isDisabled) {
    disabledStyle = "su-bg-black-10";
  }

  if (isError) {
    errorInputStyle = "su-border-digital-red";
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
      {helperText && <p className="su-text-cool-grey su-mb-5">{helperText}</p>}
      {isIcon ? <MailIcon className={dcnb("su-h-4", iconPositionStyle)} /> : ""}
      <input
        id={id}
        className={dcnb(
          "su-input su-border-b-2 su-rounded su-px-7 su-pt-7 su-pb-8",
          disabledStyle,
          errorInputStyle
        )}
        type={type}
        placeholder={placeholder}
        maxLength={maxLength ?? null}
        minLength={minLength ?? null}
        disabled={isDisabled}
        required={isRequired}
        onChange={handleOnChange}
        {...props}
      />
      {showCharCount ? (
        <p className="su-text-cool-grey su-pl-7">
          {charCount}/{maxLength}
        </p>
      ) : (
        ""
      )}
      {isError ? (
        <p className="su-text-digital-red su-text-16">
          <XIcon className="su-w-1em su-inline su-pr-3" />
          {errorText}
        </p>
      ) : (
        ""
      )}

      {isValid ? (
        <p className="su-text-digital-green su-text-16">
          <CheckIcon className="su-w-1em su-inline su-pr-3" />
          Valid Input
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
   * Error Text
   */
  errorText: PropTypes.string,

  /**
   * Input Type
   */
  type: PropTypes.string,

  /**
   * Font weight.
   */
  fontWeight: PropTypes.oneOf(Object.keys(labelWeights)),

  /**
   * Icon Position
   */
  iconPosition: PropTypes.oneOf(Object.keys(iconAlignment)),

  /**
   * Is there an error?
   */
  isError: PropTypes.bool,

  /**
   * Is the input valid?
   */
  isValid: PropTypes.bool,

  /**
   * Is there an icon?
   */
  isIcon: PropTypes.bool,

  /**
   * Is the input disabled?
   */
  isDisabled: PropTypes.bool,

  /**
   * Is the input required?
   */
  isRequired: PropTypes.bool,

  /**
   * Should the char count be displayed?
   */
  showCharCount: PropTypes.bool,

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
  isIcon: false,
  isValid: false,
  showCharCount: false,
  iconPosition: "left",
};
