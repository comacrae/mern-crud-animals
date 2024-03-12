import React from "react";

export default function CustomButton({
  children,
  type,
  value,
  disabled,
  onClick,
  testId,
}) {
  return (
    <button
      className="btn btn-primary"
      type={type}
      value={value}
      disabled={disabled}
      onClick={onClick}
      data-testid={testId}
    >
      {children}
    </button>
  );
}
