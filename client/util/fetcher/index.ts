import { cookies } from 'next/headers';

const get = async <T>(url: string, init?: RequestInit): Promise<T> => {
  const withCookieHeader = { headers: { Cookie: cookies().get('accessToken')?.value ?? 'aaaaa' } };
  console.log('withCookieHeader', withCookieHeader);
  const baseUrl = typeof window ? process.env.NEXT_PUBLIC_SERVER_URL : process.env.SERVER_URL;
  const res = await fetch(baseUrl + url, { ...withCookieHeader, ...init }).then((res) => res.json());
  return res;
};

const post = async <I, T>(url: string, data: I, init?: RequestInit): Promise<T> => {
  const withCookieHeader = { headers: { Cookie: cookies().get('accessToken')?.value ?? '' } };
  const baseUrl = typeof window ? process.env.NEXT_PUBLIC_SERVER_URL : process.env.SERVER_URL;
  const res = await fetch(baseUrl + url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...withCookieHeader.headers },
    body: JSON.stringify(data),
    mode: 'cors',
    credentials: 'include',
    ...init,
  })
    .then((res) => res.json())
    .catch((err) => console.error(err));
  return res;
};

const patch = async <I, T>(url: string, data: I, init?: RequestInit): Promise<T> => {
  const withCookieHeader = { headers: { Cookie: cookies().get('accessToken')?.value ?? '' } };
  const baseUrl = typeof window ? process.env.NEXT_PUBLIC_SERVER_URL : process.env.SERVER_URL;
  const res = await fetch(baseUrl + url, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json', ...withCookieHeader.headers },
    body: JSON.stringify(data),
    mode: 'cors',
    credentials: 'include',
    ...init,
  }).then((res) => res.json());
  return res;
};

const _delete = async <I, T>(url: string, data: I, init?: RequestInit): Promise<T> => {
  const withCookieHeader = { headers: { Cookie: cookies().get('accessToken')?.value ?? '' } };
  const baseUrl = typeof window ? process.env.NEXT_PUBLIC_SERVER_URL : process.env.SERVER_URL;
  const res = await fetch(baseUrl + url, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json', ...withCookieHeader.headers },
    body: JSON.stringify(data),
    mode: 'cors',
    credentials: 'include',
    ...init,
  }).then((res) => res.json());
  return res;
};

export const fetcher = {
  get,
  post,
  patch,
  delete: _delete,
};
