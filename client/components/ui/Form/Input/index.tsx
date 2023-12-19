import { FC, HTMLInputTypeAttribute } from 'react';

type TInputProps = {
  label: string;
  name: string;
  placeholder: string;
  type: HTMLInputTypeAttribute;
  value?: string | number;
  required?: boolean;
};

export const Input: FC<TInputProps> = ({ label, name, placeholder, type, value, required }) => {
  return (
    <div>
      <label htmlFor={label} className="block pb-1">
        {label}
      </label>

      <input
        type={type}
        id={label}
        name={name}
        required={required}
        value={value}
        placeholder={placeholder}
        className="w-full rounded-md border-2 bg-bright p-2 text-dark"
      />
    </div>
  );
};
