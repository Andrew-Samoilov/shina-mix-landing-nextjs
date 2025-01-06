"use client";

import { useFormStatus } from "react-dom";

interface SubmitButtonProps {
  pendingText?: string;
  className?: string;
  children: React.ReactNode;
  disabled?: boolean;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({
  pendingText = "Надсилання...",
  className,
  children,
  disabled=false,
}) => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending || disabled}
      className={`${className} ${pending || disabled ? "opacity-50 cursor-not-allowed" : ""}`}
    >
      {pending ? pendingText : children}
    </button>
  );
};

export default SubmitButton;
