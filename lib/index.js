import React from 'react';
import PropTypes from 'prop-types';
import { Toggle, Switch } from './styles';

function HappySwitch({ disabled, onClick, on, small }) {
  return (
    <Switch
      disabled={disabled}
      on={on}
      onClick={e => (!disabled ? onClick(e) : null)}
      small={small}
    >
      <Toggle on={on} />
    </Switch>
  );
}

HappySwitch.propTypes = {
  disabled: PropTypes.bool,
  on: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  small: PropTypes.bool,
};

HappySwitch.defaultProps = {
  on: true,
};

export default HappySwitch;
