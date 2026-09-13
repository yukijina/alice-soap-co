import supabase from './supabase';

// const fakeData = [
//   {
//     id: 1,
//     name: 'Rose Soap',
//     ingredients: 'olive',
//     scentNote: 'coconut',
//     price: 12,
//     image:
//       'https://eyqeqpjmsymbjszanejk.supabase.co/storage/v1/object/public/products/lavender.png',
//   },
//   {
//     id: 2,
//     name: 'Lavender Soap',
//     ingredients: 'olive',
//     scentNote: 'coconut',
//     price: 14,
//     image:
//       'https://eyqeqpjmsymbjszanejk.supabase.co/storage/v1/object/public/products/lavender.png',
//   },
// ];

export async function getProducts() {
  const { data, error } = await supabase.from('products').select('*');

  if (error) {
    console.log(error);
    throw new Error('Products could noe be loaded');
  }
  // console.log(data);
  return data;
  // return fakeData;
}

export async function getProduct(itemId) {
  // console.log(itemId);
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('id', itemId)
    .single();

  if (error) {
    console.log(error);
    throw new Error('Product could not loaded');
  }

  return data;
  // return fakeData;
}
