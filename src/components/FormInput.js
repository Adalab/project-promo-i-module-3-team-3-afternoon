import React from "react";
import PropTypes from 'prop-types';

const FormInput = (props) => {
  const updateInputValue = (evt) => {
    props.handleInputValue(evt.currentTarget.name,evt.currentTarget.value)
    
  }

  return (
    <div className={props.section}>
      <label htmlFor={props.name} className={props.name}>
        {props.labelName}
        <span className="inputRequired">*</span>
      </label>
      <input
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
        id={props.id}
        value={props.value}
        onChange={updateInputValue}
        required
      />
      <p className="input-error-message hiddenInputMessage">
        {props.requiredMessage}
      </p>
    </div>
  );
};

FormFill.propTypes = {
  name: PropTypes.string,
  job: PropTypes.string,
  phone: PropTypes.number,
  linkedin: PropTypes.string,
  github: PropTypes.string
}

export default FormInput;
