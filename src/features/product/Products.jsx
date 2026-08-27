import { useLoaderData } from 'react-router-dom';
import { getProducts } from '../../services/apiShop';
import Product from './Product';
import HeaderImg from '../../assets/soap-11.jpeg';

function Products() {
  const products = useLoaderData();
  return (
    <div className='section-px mt-20 my-20'>
      <div
        className='w-full h-50 bg-center bg-cover bg-stone-800 opacity-80'
        style={{
          backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.9), rgba(52, 41, 1, 0.3)),url(${HeaderImg})`,
        }}
      >
        <h2 className=' text-stone-950 p-5'>Shop All</h2>
      </div>

      <section className='flex flex-wrap gap-3 justify-center items-center mt-20'>
        {products.map((product) => (
          <Product soap={product} key={product.id} />
        ))}
      </section>
    </div>
  );
}

export async function loader() {
  const items = await getProducts();
  return items;
}

export default Products;
