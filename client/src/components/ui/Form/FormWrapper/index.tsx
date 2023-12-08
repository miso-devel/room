import { FC, ReactNode } from 'react';

type TFormWrapperProps = { children: ReactNode; action: (formData: FormData) => void };

export const FormWrapper: FC<TFormWrapperProps> = ({ children, action }) => {
  return (
    <form className="flex flex-col gap-5" action={action}>
      {children}
    </form>
  );
};
