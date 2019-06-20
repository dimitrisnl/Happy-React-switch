'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = require('./styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function HappySwitch(_ref) {
  var disabled = _ref.disabled,
      _onClick = _ref.onClick,
      on = _ref.on,
      small = _ref.small;

  return _react2.default.createElement(
    _styles.Switch,
    {
      disabled: disabled,
      on: on,
      onClick: function onClick(e) {
        return !disabled ? _onClick(e) : null;
      },
      small: small
    },
    _react2.default.createElement(_styles.Toggle, { on: on })
  );
}

HappySwitch.propTypes = {
  disabled: _propTypes2.default.bool,
  on: _propTypes2.default.bool.isRequired,
  onClick: _propTypes2.default.func.isRequired,
  small: _propTypes2.default.bool
};

HappySwitch.defaultProps = {
  on: true
};

exports.default = HappySwitch;