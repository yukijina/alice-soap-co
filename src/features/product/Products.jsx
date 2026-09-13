import { useLoaderData } from 'react-router-dom';
// import { getProducts } from '../../services/apiShop';
import { getProducts } from '../../services/apiProducts';
import ProductCard from './ProductCard';
import header from '../../assets/products-header.jpeg';

let cachedProducts = null;

function Products() {
  const products = useLoaderData();
  // console.log(products);

  return (
    <div className='section-px my-20'>
      <div
        className='w-full h-50 bg-center bg-cover bg-stone-800 opacity-80'
        style={{
          backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.9), rgba(52, 41, 1, 0.3)),url(${header})`,
        }}
      >
        <h2 className=' text-stone-950 p-5'>Shop All</h2>
      </div>

      <section className='flex flex-wrap gap-3 justify-center items-center mt-20'>
        {products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </section>
    </div>
  );
}

export async function loader() {
  // fetch only once as this website remains same products, not necessary to fetch all data again
  if (cachedProducts) {
    console.log('Serving data from local storage');
    return cachedProducts;
  }

  const items = await getProducts();
  cachedProducts = items;
  return items;
}

export default Products;
