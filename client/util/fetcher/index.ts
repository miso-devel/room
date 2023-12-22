const get = async <T>(url: string, init?: RequestInit): Promise<T> => {
  const baseUrl = typeof window ? process.env.NEXT_PUBLIC_SERVER_URL : process.env.SERVER_URL;
  const res = await fetch(baseUrl + url, init).then((res) => res.json());
  return res;
};

const post = async <I, T>(url: string, data: I, init?: RequestInit): Promise<T> => {
  const baseUrl = typeof window ? process.env.NEXT_PUBLIC_SERVER_URL : process.env.SERVER_URL;
  const res = await fetch(baseUrl + url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
    mode: 'cors',
    credentials: 'include',
    ...init,
  }).then((res) => res.json());
  return res;
};

const patch = async <I, T>(url: string, data: I, init?: RequestInit): Promise<T> => {
  const baseUrl = typeof window ? process.env.NEXT_PUBLIC_SERVER_URL : process.env.SERVER_URL;
  const res = await fetch(baseUrl + url, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
    mode: 'cors',
    credentials: 'include',
    ...init,
  }).then((res) => res.json());
  return res;
};

const _delete = async <I, T>(url: string, data: I, init?: RequestInit): Promise<T> => {
  const baseUrl = typeof window ? process.env.NEXT_PUBLIC_SERVER_URL : process.env.SERVER_URL;
  const res = await fetch(baseUrl + url, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
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
  _delete,
};
