import type { FC, ReactNode } from 'react'

type WithTitleWrapperProps = { title?: string; additionalElms?: ReactNode; children: ReactNode }
export const WithTitleWrapper: FC<WithTitleWrapperProps> = ({ title, additionalElms, children }) => {
  return (
    <>
      {title && (
        <div className='flex items-center gap-3 pb-5'>
          <h1 className='text-3xl font-bold'>{title}</h1>
          {additionalElms}
        </div>
      )}
      {children}
    </>
  )
}
