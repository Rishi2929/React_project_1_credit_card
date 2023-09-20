import "./FormInput.css";
import { useState } from "react";

const FormInput = (props) => {
  const [focused, setFocused] = useState(false);

  const { label, errorMessage, onChange, id, error, minLength,  ...inputProps } = props;
  console.log("input error: ", error);

  // console.log("inputProps", inputProps);
  // console.log("focused", focused);

  const handleFocus = (e) => {
    setFocused(true);
    // console.log("e", e.target.name);
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
      {
        error && props.value <= minLength ? <span>{errorMessage}</span> : ""
      }
    </div>
  );
};
export default FormInput;
