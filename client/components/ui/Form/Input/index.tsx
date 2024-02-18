import type { ComponentProps, FC } from 'react'

type InputProps = ComponentProps<'input'> & {
  label?: string
  name: string
}

export const Input: FC<InputProps> = ({ label, name, ...rest }) => {
  return (
    <div>
      {label && (
        <label htmlFor={label} className='block pb-1'>
          {label}
        </label>
      )}
      <input id={label} name={name} className='w-full rounded-md border-2 bg-bright p-2 text-dark' {...rest} />
    </div>
  )
}
