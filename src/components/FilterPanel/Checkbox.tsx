import React, { useState } from 'react';

interface Props {
  text: string;
  value: string;
}

export function Checkbox({ value, text }: Props) {
  const [checked, setChecked] = useState(false);
  const handleClick = () => setChecked(!checked);

  return (
    <label
      htmlFor={value}
      className={`inline-flex justify-between items-center mr-2 py-1 px-2.5 cursor-pointer text-[#f7f7f7] transition ease-out duration-300 ${
        checked ? 'bg-[#E02735]' : 'bg-[#292A2B]'
      }`}
    >
      <input
        className="peer sr-only"
        type="checkbox"
        id={value}
        name={value}
        onClick={handleClick}
        checked={checked}
      />
      <p className="text-[12px] select-none">{text}</p>
      {text.length === 1 && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-5 w-5 transition ease-out duration-300 ${
            checked ? 'fill-[#f7f7f7]' : 'fill-[#E02735]'
          }`}
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      )}
    </label>
  );
}
