import React, { ChangeEvent } from "react";
import clsx from 'clsx';

interface TextareaProps {
  label: string;
  value: string;
  placeholder?: string;
  onTextChange: (value: string) => void;
}

const Textarea: React.FC<TextareaProps> = ({ label, value, onTextChange, placeholder = "" }) => {
  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    onTextChange(event.target.value);
  };

  const textareaClasses = clsx(
    "block",
    "p-2.5",
    "w-full",
    "text-sm",
    "bg-gray-50",
    "rounded-lg",
    "border",
    "light:text-primary",
    "border-gray-300",
    "focus:border-primary-500",
    "focus:border-primary-500",
    "dark:bg-white-700",
    "dark:border-primary-300",
    "dark:placeholder-gray-400",
    "dark:text-primary",
    "dark:text-gray-900",
  );

  return (
    <div className="flex flex-col">
      <label htmlFor="message" className="block mb-2 text-sm font-medium text-primary-400 ">
        {label}
      </label>
      <textarea
        id="message"
        rows={4}
        className={textareaClasses}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default Textarea;