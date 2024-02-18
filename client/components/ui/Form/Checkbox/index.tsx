import Image from 'next/image'
import type { FC, ReactNode } from 'react'

type CheckBoxProps = {
  label: string
  name: string
  value?: string | number
  children: ReactNode
}

export const Checkbox: FC<CheckBoxProps> = ({ children, label, name, value }) => {
  return (
    <div className='inline-flex items-center'>
      <label className='relative flex cursor-pointer items-center rounded-full p-2' htmlFor={label}>
        <input
          type='checkbox'
          className="before:content[''] before:bg-blue-gray-500 peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-dark transition-all before:absolute before:left-2/4 before:top-2/4 before:block before:h-12 before:w-12 before:-translate-x-2/4 before:-translate-y-2/4 before:rounded-full before:opacity-0 before:transition-opacity checked:border-dark checked:bg-accent checked:before:bg-accent hover:before:opacity-10"
          id={label}
          name={name}
          value={value}
        />
        <span className='pointer-events-none absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 text-dark opacity-0 transition-opacity peer-checked:opacity-100'>
          <Image src='/svg/check.svg' alt={`${name}をcheckする`} width={5} height={6} className='h-4 w-4 fill-dark' />
        </span>
      </label>
      <label className='mt-px cursor-pointer select-none text-dark' htmlFor={label}>
        {children}
      </label>
    </div>
  )
}
