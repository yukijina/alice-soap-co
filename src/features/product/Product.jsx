import { useLoaderData } from 'react-router-dom';
import { getProducts } from '../../services/apiShop';
import ProductItem from './ProductItem';

function Product() {
  const products = useLoaderData();
  return (
    <div className='section-px mt-20 my-20'>
      <h2>Shop All</h2>
      <section className='flex flex-wrap gap-3 justify-center items-center mt-20'>
        {products.map((product) => (
          <ProductItem soap={product} key={product.id} />
        ))}
      </section>
    </div>
  );
}

export async function loader() {
  const items = await getProducts();
  return items;
}

export default Product;
