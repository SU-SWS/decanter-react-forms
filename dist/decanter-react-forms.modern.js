import { dcnb } from 'cnbuilder';
import PropTypes from 'prop-types';
import React from 'react';

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var _excluded = ["className", "children"];
var Example = function Example(_ref) {
  var className = _ref.className,
      children = _ref.children,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  return /*#__PURE__*/React.createElement("div", {
    className: dcnb("su-example", className)
  }, children);
};
Example.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element, PropTypes.string]),
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.array])
};
Example.defaultProps = {};

export { Example };
