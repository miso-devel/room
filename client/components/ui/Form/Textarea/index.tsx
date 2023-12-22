import { FC } from 'react';

type TTextareaProps = { label: string; name: string; defaultValue?: string; placeholder: string };

export const Textarea: FC<TTextareaProps> = ({ label, name, defaultValue, placeholder }) => {
  return (
    <div>
      <label htmlFor={label} className="block pb-1">
        {label}
      </label>

      <textarea
        id={label}
        name={name}
        defaultValue={defaultValue}
        className="h-32 w-full resize-none rounded-md bg-bright p-2 text-dark"
        placeholder={placeholder}
      ></textarea>
    </div>
  );
};
