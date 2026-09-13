import { useSelector } from 'react-redux';
import Cart from '../features/cart/Cart';
import CheckoutSummary from '../features/checkout/CheckoutSummary';
import EmptyCart from '../features/cart/EmptyCart';
import { getCart, getTotalCartPrice } from '../features/cart/cartSlice';

function CartPage() {
  const cart = useSelector(getCart);
  const totalCartPrice = useSelector(getTotalCartPrice);

  if (!cart.length) return <EmptyCart />;

  return (
    <section className='section-px my-20'>
      <div className='mb-10 flex justify-center'>
        <p className='text-red-400 bg-red-50 px-5 py-3 '>
          This website is a fictional portfolio project created for
          demonstration purposes only. No products or services are available for
          purchase.
        </p>
      </div>
      <div className='flex justify-center gap-20'>
        <Cart cart={cart} />
        <CheckoutSummary totalCartPrice={totalCartPrice} />
      </div>
    </section>
  );
}

export default CartPage;
