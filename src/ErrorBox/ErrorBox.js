import React, { useState } from "react";
import PropTypes from "prop-types";
import { dcnb } from "cnbuilder";
import { ExclamationCircleIcon } from "@heroicons/react/solid";
import { DismissButton } from "../DismissButton/DismissButton";

/**
 * Error Summary Box Component
 *
 */
export const ErrorBox = ({ className, children, ...props }) => {
  const [isDismissed, setDismissed] = useState(false);

  // Dismissed State.
  if (isDismissed === true) {
    return null;
  }

  // Render
  // ---------------------------------------------------------------------------
  return (
    <div
      className={dcnb(
        "su-bg-digital-red-light su-bg-opacity-20 su-px-18 su-pt-18 su-pb-26 su-flex su-flex-row su-items-start su-w-fit",
        className
      )}
    >
      <div>
        <ExclamationCircleIcon
          className="su-w-20 su-mr-6 su-text-digital-red"
          aria-hidden="true"
        />
      </div>
      <div className="su-flex-grow su-max-w-400 su-text-digital-red">
        {children}
      </div>
      <DismissButton
        className="su-ml-18 su-text-digital-red"
        onClick={() => {
          setDismissed(true);
        }}
      />
    </div>
  );
};

ErrorBox.propTypes = {
  // Nodes and content.
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element,
    PropTypes.string,
  ]),

  /**
   * CSS Class names.
   */
  className: PropTypes.string,
};

// Default Props.
// -----------------------------------------------------------------------------
ErrorBox.defaultProps = {};
