import "./FormInput.css";
import { useState } from "react";

const FormInput = (props) => {
  const [focused, setFocused] = useState(false);

  const { label, errorMessage, onChange, id, ...inputProps } = props;

  console.log("inputProps", inputProps);

  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <div className="formInput">
      <div>
        <label>{label}</label>
      </div>
      <input 
        {...inputProps}
        onChange={onChange}
        value={props.value} 
        onBlur={handleFocus}
        focused={focused.toString()}
      />
      <span>{errorMessage}</span>
    </div>
  );
};
export default FormInput;
