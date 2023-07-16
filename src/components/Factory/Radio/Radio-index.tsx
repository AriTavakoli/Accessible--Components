import React, { ChangeEvent } from "react";
import clsx from 'clsx';

interface RadioGroupProps {
  label: string;
  value: string;
  options: string[];
  onValueChange: (value: string) => void;
}

const RadioGroup: React.FC<RadioGroupProps> = ({ label, value, options, onValueChange }) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onValueChange(event.target.value);
  };

  const radioVariantList = {

    buttonVariantList: [
      'primary',
      "outline",
      "ghost",
      "link",
    ],
    modalVariantList: [
      'agree',
      'continue',
    ],
  }




  return (
    <div className="flex flex-col">
      <label className="block mb-2 text-sm font-medium text-gray-900">
        {label}
      </label>
      <div className="flex flex-wrap">
        {radioVariantList[options].map((option) => {
          const isOptionSelected = value === option;
          return (
            <label key={option} className={clsx("flex items-center mr-4 mb-2 cursor-pointer",
              isOptionSelected && "text-primary-500")}>
              <div className={clsx("w-4 h-4 inline-block mr-2 rounded-full border border-grey flex justify-center items-center",
                isOptionSelected && "text-primary-500")}>
                <div className={clsx("dot w-2 h-2 rounded-full",
                  isOptionSelected ? "bg-primary-500" : "bg-transparent")}></div>
              </div>
              <input
                type="radio"
                className="hidden"
                value={option}
                checked={isOptionSelected}
                onChange={handleChange}
              />
              <span className="ml-2">{option}</span>
            </label>
          );
        })}
      </div>
    </div>
  );
};

export default RadioGroup;
