const API_URL = 'https://fakestoreapi.com/products';

export async function getProducts() {
  const res = await fetch(`${API_URL}?limit=20`);

  if (!res.ok) throw Error('Failed getting products');

  const data = await res.json();
  return data;
}
