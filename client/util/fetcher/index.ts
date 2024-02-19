import { cookies } from 'next/headers'
import { errorHandler } from '../error'

const get = async <T>(url: string, init?: RequestInit): Promise<T> => {
  const isServer = typeof window === 'undefined'
  // biome-ignore lint/style/useNamingConvention: <explanation>
  const withCookieHeader = { headers: { Cookie: cookies().get('accessToken')?.value ?? '' } }
  const baseUrl = isServer ? process.env.SERVER_URL : process.env.NEXT_PUBLIC_SERVER_URL
  const res = await fetch(baseUrl + url, { ...withCookieHeader, ...init })
  if (res.status !== 200) errorHandler(res)
  const data = await res.json()
  return data
}

const post = async <I, T>(url: string, input: I, init?: RequestInit): Promise<T> => {
  // biome-ignore lint/style/useNamingConvention: <explanation>
  const withCookieHeader = { headers: { Cookie: cookies().get('accessToken')?.value ?? '' } }
  const baseUrl = typeof window !== 'undefined' ? process.env.NEXT_PUBLIC_SERVER_URL : process.env.SERVER_URL
  const res = await fetch(baseUrl + url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...withCookieHeader.headers },
    body: JSON.stringify(input),
    mode: 'cors',
    credentials: 'include',
    ...init,
  })
  if (res.status !== 200) errorHandler(res)
  const data = await res.json()
  return data
}

const patch = async <I, T>(url: string, input: I, init?: RequestInit): Promise<T> => {
  // biome-ignore lint/style/useNamingConvention: <explanation>
  const withCookieHeader = { headers: { Cookie: cookies().get('accessToken')?.value ?? '' } }
  const baseUrl = typeof window !== 'undefined' ? process.env.NEXT_PUBLIC_SERVER_URL : process.env.SERVER_URL
  const res = await fetch(baseUrl + url, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json', ...withCookieHeader.headers },
    body: JSON.stringify(input),
    mode: 'cors',
    credentials: 'include',
    ...init,
  })
  if (res.status !== 200) errorHandler(res)
  const data = await res.json()
  return data
}

const _delete = async <I, T>(url: string, input: I, init?: RequestInit): Promise<T> => {
  // biome-ignore lint/style/useNamingConvention: <explanation>
  const withCookieHeader = { headers: { Cookie: cookies().get('accessToken')?.value ?? '' } }
  const baseUrl = typeof window !== 'undefined' ? process.env.NEXT_PUBLIC_SERVER_URL : process.env.SERVER_URL
  const res = await fetch(baseUrl + url, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json', ...withCookieHeader.headers },
    body: JSON.stringify(input),
    mode: 'cors',
    credentials: 'include',
    ...init,
  })
  if (res.status !== 200) errorHandler(res)
  const data = await res.json()
  return data
}

export const fetcher = {
  get,
  post,
  patch,
  delete: _delete,
}
