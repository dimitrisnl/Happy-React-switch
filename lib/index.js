import React from 'react';
import PropTypes from 'prop-types';

function Switch({ active, className, enabled, onClick, small }) {
  const classes = [
    'happy-switch',
    className,
    active ? 'on ' : 'off',
    small ? 'small ' : '',
    enabled ? '' : 'disabled ',
  ].join(' ');

  return (
    <div className={classes} onClick={e => (enabled ? onClick(e) : null)}>
      <div className="switch-toggle" />
    </div>
  );
}

Switch.propTypes = {
  active: PropTypes.bool.isRequired,
  className: PropTypes.string,
  enabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  small: PropTypes.bool,
};
Switch.defaultProps = {
  enabled: true,
  className: '',
};

export default Switch;
