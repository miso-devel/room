'use client'
export default function PageError({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  return (
    <>
      <div className='bg-red-300 p-3 rounded-md shadow-2xl'>
        <p>{error.message}</p>
      </div>
      <div className='flex justify-end my-1'>
        <button
          type='button'
          className='text-right border border-black hover:opacity-80 hover:border-2 p-1 rounded-md'
          onClick={() => reset()}
        >
          リセット
        </button>
      </div>
    </>
  )
}
