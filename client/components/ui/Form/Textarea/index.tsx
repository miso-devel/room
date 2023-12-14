import { FC } from 'react';

type TTextareaProps = { label: string; name: string; placeholder: string };

export const Textarea: FC<TTextareaProps> = ({ label, name, placeholder }) => {
  return (
    <div>
      <label htmlFor={label} className="block pb-1">
        {label}
      </label>

      <textarea
        id={label}
        name={name}
        className="p-2 rounded-md w-full text-dark bg-bright h-32 resize-none"
        placeholder={placeholder}
      ></textarea>
    </div>
  );
};
