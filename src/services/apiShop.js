const API_URL = 'https://fakestoreapi.com';

export async function getProducts() {
  const res = await fetch(`${API_URL}/products?limit=20`);

  if (!res.ok) throw Error('Failed getting products');

  const data = await res.json();
  return data;
}

// export async function createOrder(newOrder) {
export async function createOrder() {
  // test data
  const newOrder = [
    {
      id: 0,
      userId: 0,
      products: [
        {
          id: 0,
          title: 'new soap',
          price: 80,
          description: 'order',
          category: 'soap',
          image: 'http://example.com',
        },
      ],
    },
  ];

  try {
    const res = await fetch(`${API_URL}/carts`, {
      method: 'POST',
      body: JSON.stringify(newOrder),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log(res);
    if (!res.ok) throw Error();
    const { data } = await res.json();
    return data;
  } catch (err) {
    throw Error(`${err} - Failed creating your order`);
  }
}
