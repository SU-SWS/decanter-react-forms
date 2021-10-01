(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('cnbuilder'), require('prop-types'), require('react')) :
  typeof define === 'function' && define.amd ? define(['exports', 'cnbuilder', 'prop-types', 'react'], factory) :
  (global = global || self, factory(global.decanterReactForms = {}, global.dcnb, global.PropTypes, global.react));
}(this, (function (exports, cnbuilder, PropTypes, React) {
  PropTypes = PropTypes && Object.prototype.hasOwnProperty.call(PropTypes, 'default') ? PropTypes['default'] : PropTypes;
  React = React && Object.prototype.hasOwnProperty.call(React, 'default') ? React['default'] : React;

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
      className: cnbuilder.dcnb("su-example", className)
    }, children);
  };
  Example.propTypes = {
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.element, PropTypes.string]),
    className: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.array])
  };
  Example.defaultProps = {};

  exports.Example = Example;

})));
