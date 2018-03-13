## Happy React Switch ![npm](https://img.shields.io/npm/dt/happy-react-switch.svg)

A simple switch component in React

### Installation

```
yarn add happy-react-switch
# or
npm i happy-react-switch
```

### Caveats

Remember to include `happy-react-switch/style.css`. Otherwise you'll have to include your own styles.

### Demo

[![Edit Happy react Toggle](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/m70x6z64vy)

### Options

```
Switch.propTypes = {
  active: PropTypes.bool.isRequired,
  className: PropTypes.string,
  enabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  small: PropTypes.bool,
};
```
