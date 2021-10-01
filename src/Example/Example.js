import { dcnb } from 'cnbuilder';
import PropTypes from 'prop-types';
import React from 'react';

/**
 * Example Component
 *
 * Just for initial setup. Please delete me later.
 *
 */
export const Example = ({ className, children, ...props }) => (
  <div className={dcnb('su-example', className)}>{children}</div>
);

// Prop Types.
// -----------------------------------------------------------------------------

Example.propTypes = {
  // Nodes and content.
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element,
    PropTypes.string,
  ]),
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
};

// Default Props.
// -----------------------------------------------------------------------------
Example.defaultProps = {};
