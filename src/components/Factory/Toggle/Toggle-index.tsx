import React, { useState } from "react";

interface ToggleProps {
  label: string;
  initialChecked?: boolean;
  onToggle?: (checked: boolean) => void;
  disabled?: boolean;
}

const Toggle: React.FC<ToggleProps> = ({ label, initialChecked = false, onToggle, disabled }) => {
  const [isChecked, setIsChecked] = useState(initialChecked);

  const handleToggle = () => {
    if (disabled) return;
    const newCheckedState = !isChecked;
    setIsChecked(newCheckedState);
    onToggle && onToggle(newCheckedState);
  };

  return (
    <div className = "flex flex-col item-center justify-start p-2">
      <label
        onClick={handleToggle}
        className={`relative inline-flex items-center cursor-pointer  ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
      >
        <span className={`mr-3 text-m  ${disabled ? "text-primary-400" : "text-primary-400"}`}>{label}</span>

        <span className="sr-only">{label}</span>
        <div className={`relative w-11 h-6 transition-colors mt-1 duration-200 ${isChecked ? "bg-primary-500" : "bg-gray-200"} rounded-full `}>
          <span
            className={` absolute top-0.5 left-[2px] transition-transform duration-200 w-5 h-5 ${isChecked ? "transform translate-x-5" : ""} bg-white border-2 border-gray-300 rounded-full`}
          ></span>
        </div>
      </label>
    </div>
  );
};

export default Toggle;
