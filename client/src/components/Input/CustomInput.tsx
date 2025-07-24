import React, { useState, useEffect, ChangeEvent, RefObject } from "react";
import "./CustomInput.css"; // regular CSS import (no module)

interface CustomInputProps {
  value?: string;
  label?: string;
  inputRef?: RefObject<HTMLInputElement>;
  name: string;
  type?: string;
  onChange: (value: string) => void;
  error?: string | boolean;
  description?: string;
  maxLength?: number;
  test?: string;
  testError?: string;
  id?: string;
  required?: boolean;
}

const CustomInput: React.FC<CustomInputProps> = React.memo(
  ({
    value,
    label,
    inputRef,
    name,
    type = "text",
    onChange,
    error,
    required,
    description,
    maxLength,
    test,
    testError,
    id
  }) => {
    const [isFilled, setIsFilled] = useState(false);

    useEffect(() => {
      setIsFilled(!!value);
    }, [value]);

    const handleClearInput = () => {
      onChange("");
      setIsFilled(false);
    };

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
      const inputValue = e.target.value;
      onChange(inputValue);
      setIsFilled(!!inputValue);
    };

    return (
      <div>
        <label className="inp" htmlFor={id ?? name}>
          <input
            type={type}
            value={value}
            name={name}
            id={id ?? name}
            ref={inputRef}
            placeholder="&nbsp;"
            onChange={handleInputChange}
            maxLength={maxLength}
            data-testid={test ? test : undefined}
            className={error ? "error" : undefined}
          />

          {label && (
            <span className="label">
              {label}
            </span>
          )}

          {isFilled && (
            <span className="closeIcon" onClick={handleClearInput}>
              <img src='assets/images/input-close.svg' alt="Clear input" />
            </span>
          )}
        </label>
        {description && <div className="input-description">{description}</div>}
        {error && (
          <p
            className="errorValidation"
            data-testid={testError ? testError : undefined}
          >
            {error}
          </p>
        )}
      </div>
    );
  }
);

export default CustomInput;
