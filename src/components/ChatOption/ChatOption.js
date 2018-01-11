import React from 'react';
import PropTypes from 'prop-types';

const ChatOption = ({ option, onUserInput, isSelected }) => {
  const isSelectedClass = (isSelected) ? 'chat-option__button--selected' : '';
  const classes = `ibm-type-b chat-option__button ${isSelectedClass}`;

  return (
    <button
      className={classes}
      disabled={isSelected}
      onClick={() => { onUserInput(option); }}
    >{option.label}
    </button>
  );
};

ChatOption.propTypes = {
  option: PropTypes.object.isRequired,
  onUserInput: PropTypes.func.isRequired,
  isSelected: PropTypes.bool.isRequired,
};

export default ChatOption;
