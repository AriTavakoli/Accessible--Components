import React, { ChangeEvent } from 'react';
import clsx from 'clsx';
import colorList from './ColorList';

interface ColorPickerProps {
  color: string;
  colorList?: string[];
  setColor?: (color: string) => void;
  textColor?: string;
  mode?: string;
}

const ColorPicker: React.FC<ColorPickerProps> = ({ color, setColor, textColor, mode }) => {
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setColor(event.target.value);
  };

  return (
    <div className='space-y-2'>
      <h2 className='text-lg md:text-xl'>Customize Colors</h2>
      <p className={clsx('!mt-1 text-sm', textColor)}>
        You can change primary color to any Tailwind CSS colors. See globals.css to change your color.
      </p>
      <div className='flex flex-wrap gap-2'>
        <select
          name='color'
          id='color'
          value={color}
          className={clsx(
            'block max-w-xs rounded',
            textColor,
            mode === 'dark'
              ? 'bg-dark border border-gray-600'
              : 'border-gray-300 bg-white',
            'focus:border-primary-400 focus:ring-primary-400 focus:outline-none focus:ring'
          )}
          onChange={handleChange}
        >
          {colorList.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default ColorPicker;
