import type { ComponentProps, FC, ReactNode } from 'react'

type ButtonProps = ComponentProps<'button'> & {
  children: ReactNode
  onDark?: boolean
  sm?: boolean
}

export const Button: FC<ButtonProps> = ({ children, onDark, sm, ...rest }) => {
  return (
    <button
      type={rest.type || 'button'}
      className={`${onDark ? 'border-bright hover:border-transparent hover:text-dark' : 'hover:border-dark'} ${
        sm ? 'border p-1 text-sm' : 'border-2 p-2 text-base'
      } rounded-md transition-all hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-transparent`}
      {...rest}
    >
      {children}
    </button>
  )
}
