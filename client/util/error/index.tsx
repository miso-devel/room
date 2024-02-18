import { redirect } from 'next/navigation'

export const errorHandler = (res: Response) => {
  switch (res.status) {
    case 401:
      console.log('401', 'Auth Error')
      redirect('/')
      break
    default:
      throw new Error(`API error: ${res.statusText}`)
  }
}
