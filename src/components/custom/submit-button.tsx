"use client";

import { useFormStatus } from "react-dom";

interface SubmitButtonProps {
  pendingText?: string;
  className?: string;
  children: React.ReactNode;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({
  pendingText = "Надсилання...",
  className,
  children,
}) => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className={`${className} ${pending ? "opacity-50 cursor-not-allowed" : ""}`}
    >
      {pending ? pendingText : children}
    </button>
  );
};

export default SubmitButton;
