'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Toggle = exports.Switch = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  0% {\n    left: 0;\n    width: 42%;\n  }\n  50% {\n    left: 0;\n    width: 100%;\n  }\n  100% {\n    left: 58%;\n    width: 42%;\n  }\n'], ['\n  0% {\n    left: 0;\n    width: 42%;\n  }\n  50% {\n    left: 0;\n    width: 100%;\n  }\n  100% {\n    left: 58%;\n    width: 42%;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  0% {\n    left: 58%;\n    width: 42%;\n  }\n  50% {\n    left: 0;\n    width: 100%;\n  }\n  100% {\n    left: 0;\n    width: 42%;\n  }\n'], ['\n  0% {\n    left: 58%;\n    width: 42%;\n  }\n  50% {\n    left: 0;\n    width: 100%;\n  }\n  100% {\n    left: 0;\n    width: 42%;\n  }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  display: inline-block;\n\n  cursor: pointer;\n  transition: all 0.5s ease-in-out;\n  border-radius: 13px;\n  box-shadow: 1px 1px 1px #ccc;\n\n  ', '\n\n  ', '\n\n  ', '\n'], ['\n  display: inline-block;\n\n  cursor: pointer;\n  transition: all 0.5s ease-in-out;\n  border-radius: 13px;\n  box-shadow: 1px 1px 1px #ccc;\n\n  ', '\n\n  ', '\n\n  ', '\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  position: relative;\n  left: 0;\n  width: 42%;\n  height: 100%;\n  border-radius: 12px;\n  background-color: #fff;\n  box-shadow: 1px 1px 1px #aaa;\n\n  ', '\n'], ['\n  position: relative;\n  left: 0;\n  width: 42%;\n  height: 100%;\n  border-radius: 12px;\n  background-color: #fff;\n  box-shadow: 1px 1px 1px #aaa;\n\n  ', '\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var moveIn = (0, _styledComponents.keyframes)(_templateObject);

var moveOut = (0, _styledComponents.keyframes)(_templateObject2);

var Switch = exports.Switch = _styledComponents2.default.div(_templateObject3, function (_ref) {
  var small = _ref.small;
  return small ? 'width: 35px; height: 15px;' : 'width: 45px; height: 20px;';
}, function (_ref2) {
  var on = _ref2.on;
  return 'background-color: ' + (on ? '#a3be8c' : '#bf616a') + ' 0.5s forwards;';
}, function (_ref3) {
  var disabled = _ref3.disabled;
  return disabled ? 'cursor: not-allowed' : '';
});

var Toggle = exports.Toggle = _styledComponents2.default.div(_templateObject4, function (_ref4) {
  var on = _ref4.on;
  return 'animation: ' + (on ? moveIn : moveOut) + ' 0.5s forwards;';
});