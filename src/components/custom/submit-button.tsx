"use client";
import { useFormStatus } from "react-dom";
import { ReactNode } from "react";

interface SubmitButtonProps {
  pendingText?: string;
  className?: string;
  children: ReactNode;
  disabled?: boolean;
}

export default function SubmitButton({
  pendingText = "Надсилання...",
  className = "",
  children,
  disabled = false,
}: SubmitButtonProps) {
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
