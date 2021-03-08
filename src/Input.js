import React from "react";

export default function Input(props) {
    // Implement Input
    const {placeholder, onInput, type, required, className, readOnly} = props;
    let inputClassName = `input-login input ${className}`;
    

        return (<label className="label">
        {placeholder}
            { required && <span className="input-required">*</span>}
            <div>
                <input className={inputClassName} type={type} onInput={onInput} placeholder={placeholder} required={required} readOnly={readOnly} />
            </div>
        </label>)
        
}