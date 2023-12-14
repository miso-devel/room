import { FC, ReactNode } from 'react';

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
          className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-bright checked:bg-accent checked:before:bg-accent hover:before:opacity-10"
          id={label}
          name={name}
          value={value}
        />
        <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 fill-dark" viewBox="0 0 20 20" stroke-width="2">
            <path
              fill-rule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </span>
      </label>
      <label className="mt-px text-bright cursor-pointer select-none" htmlFor={label}>
        {children}
      </label>
    </div>
  );
};
