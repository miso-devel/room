import { FC, HTMLInputTypeAttribute } from 'react';

type TInputProps = {
  label: string;
  name: string;
  placeholder: string;
  type: HTMLInputTypeAttribute;
  defaultValue?: string | number;
  required?: boolean;
};

export const Input: FC<TInputProps> = ({ label, name, placeholder, type, defaultValue, required }) => {
  return (
    <div>
      <label htmlFor={label} className="block pb-1">
        {label}
      </label>

      <input
        defaultValue={defaultValue}
        type={type}
        id={label}
        name={name}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-md border-2 bg-bright p-2 text-dark"
      />
    </div>
  );
};
