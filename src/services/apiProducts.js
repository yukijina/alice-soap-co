import supabase from './supabase';

export async function getProducts() {
  console.log('here!');
  const { data, error } = await supabase.from('products').select('*');

  if (error) {
    console.log(error);
    throw new Error('Products could noe be loaded');
  }
  console.log(data);
  return data;
}
