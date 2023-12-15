export const fetcher = async <T>(url: string): Promise<T> => {
  const baseUrl = typeof window ? process.env.NEXT_PUBLIC_SERVER_URL : process.env.SERVER_URL;
  const res = await fetch(baseUrl + url).then((res) => res.json());
  return res;
};

export const mutater = async <I, T>(url: string, data: I): Promise<T> => {
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return res.json();
};
