const API_URL = 'https://fakestoreapi.com/products?limit=20';

export async function getProducts() {
  const res = await fetch(API_URL);

  if (!res.ok) throw Error('Failed getting products');

  const data = await res.json();
  return data;
}
