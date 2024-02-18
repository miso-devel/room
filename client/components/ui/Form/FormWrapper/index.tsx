import type { FC, ReactNode } from 'react'

type FormWrapperProps = { children: ReactNode; action: (formData: FormData) => void }

export const FormWrapper: FC<FormWrapperProps> = ({ children, action }) => {
  return (
    <form className='flex flex-col gap-5' action={action}>
      {children}
    </form>
  )
}
