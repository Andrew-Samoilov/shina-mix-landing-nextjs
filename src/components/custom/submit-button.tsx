"use client";

import { useFormStatus } from "react-dom";
import { useState, ReactNode } from "react";

// Оголошуємо `grecaptcha` глобально, щоб TypeScript не лаявся
declare global {
  interface Window {
    grecaptcha?: {
      ready: (callback: () => void) => void;
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
    };
  }
}

interface SubmitButtonProps {
  pendingText?: string;
  className?: string;
  children: ReactNode;
  disabled?: boolean;
  onBeforeSubmit?: (recaptchaToken: string) => Promise<void>;
}

export default function SubmitButton({
  pendingText = "Надсилання...",
  className = "",
  children,
  disabled = false,
  onBeforeSubmit,
}: SubmitButtonProps) {
  const { pending } = useFormStatus();
  const [loading, setLoading] = useState(false);

  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY; // Публічний ключ

  const loadRecaptcha = () => {
    if (typeof window === "undefined" || window.grecaptcha) return;

    const script = document.createElement("script");
    script.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`;
    script.async = true;
    script.defer = true;
    script.onload = () => {
      console.log("reCAPTCHA завантажено");
    };
    document.body.appendChild(script);
  };

  const handleClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
    if (!onBeforeSubmit || pending || disabled) return;

    event.preventDefault();
    setLoading(true);

    if (!siteKey) {
      console.error("Помилка: NEXT_PUBLIC_RECAPTCHA_SITE_KEY не знайдено в .env");
      alert("Помилка конфігурації reCAPTCHA. Зверніться до адміністратора.");
      setLoading(false);
      return;
    }

    if (typeof window === "undefined" || !window.grecaptcha) {
      alert("Помилка завантаження reCAPTCHA, спробуйте ще раз.");
      setLoading(false);
      return;
    }

    try {
      await new Promise<void>((resolve) => {
        window.grecaptcha!.ready(resolve);
      });

      const token = await window.grecaptcha!.execute(siteKey, { action: "submit" });


      await onBeforeSubmit(token);
    } catch (error) {
      console.error("Помилка reCAPTCHA:", error);
      alert("Помилка отримання reCAPTCHA. Спробуйте ще раз.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      type="submit"
      disabled={pending || disabled || loading}
      onMouseEnter={loadRecaptcha}
      onClick={handleClick}
      className={`${className} ${pending || disabled || loading ? "opacity-50 cursor-not-allowed" : ""}`}
    >
      {pending || loading ? pendingText : children}
    </button>
  );
};
