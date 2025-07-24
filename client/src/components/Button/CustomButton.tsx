import React, { MouseEventHandler } from "react";
import "./CustomButton.css"; // regular CSS import (no module)

interface CustomButtonProps {
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  onClick?: MouseEventHandler<HTMLButtonElement>;
  title: React.ReactNode;
  test?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  disabled = false,
  type = "button",
  onClick,
  title,
  test,
}) => {
  return (
    <button
      data-testid={test ? test : undefined}
      className="btn"  // Use plain class name here
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      <div>{title}</div>
    </button>
  );
};

export default CustomButton;
