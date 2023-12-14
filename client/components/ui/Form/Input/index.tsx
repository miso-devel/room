import { FC, HTMLInputTypeAttribute } from 'react';

type TInputProps = {
  label: string;
  name: string;
  placeholder: string;
  type: HTMLInputTypeAttribute;
  value?: string | number;
};

export const Input: FC<TInputProps> = ({ label, name, placeholder, type, value }) => {
  return (
    <div>
      <label htmlFor={label} className="block pb-1">
        {label}
      </label>

      <input
        type={type}
        id={label}
        name={name}
        value={value}
        placeholder={placeholder}
        className="border-2 p-2 rounded-md w-full bg-bright text-dark"
      />
    </div>
  );
};
