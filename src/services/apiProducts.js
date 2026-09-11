import supabase from './supabase';

export async function getProducts() {
  const { data, error } = await supabase.from('products').select('*');

  if (error) {
    console.log(error);
    throw new Error('Products could noe be loaded');
  }
  console.log(data);
  return data;
}

export async function getProduct(itemId) {
  console.log('here!');
  console.log(itemId);
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('id', itemId)
    .single();

  if (error) {
    console.log(error);
    throw new Error('Product could not loaded');
  }

  console.log(`single ${data}`);
  return data;
}
