import React from 'react';


const Modal = ({
  text,
  isVisible = false,
  onClick
}) => (
  <div onClick={onClick}>
    {isVisible ? text : ""}
  </div>
);
Modal.propTypes = {
  text: React.PropTypes.string.isRequired,
  isVisible: React.PropTypes.bool,
  onClick: React.PropTypes.func.isRequired
};


export { Modal };
