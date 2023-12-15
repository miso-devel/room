import { FC, ReactNode } from 'react';
import Check from 'public/svg/check.svg';
type TCheckBoxProps = {
  label: string;
  name: string;
  value?: string | number;
  children: ReactNode;
};

export const Checkbox: FC<TCheckBoxProps> = ({ children, label, name, value }) => {
  return (
    <div className="inline-flex items-center">
      <label className="relative flex items-center p-2 rounded-full cursor-pointer" htmlFor={label}>
        <input
          type="checkbox"
          className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-dark transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-dark checked:bg-accent checked:before:bg-accent hover:before:opacity-10"
          id={label}
          name={name}
          value={value}
        />
        <span className="absolute text-dark transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
          <Check className="h-4 w-4 fill-dark" />
        </span>
      </label>
      <label className="mt-px text-dark cursor-pointer select-none" htmlFor={label}>
        {children}
      </label>
    </div>
  );
};
