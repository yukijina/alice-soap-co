import { useSelector } from 'react-redux';
import Cart from '../features/cart/Cart';
import CheckoutSummary from '../features/checkout/CheckoutSummary';
import EmptyCart from '../features/cart/EmptyCart';
import { getCart, getTotalCartPrice } from '../features/Cart/cartSlice';

function CartPage() {
  const cart = useSelector(getCart);
  const totalCartPrice = useSelector(getTotalCartPrice);

  if (!cart.length) return <EmptyCart />;

  return (
    <section className='section-px my-20 h-screen flex justify-center gap-20'>
      <Cart cart={cart} />
      <CheckoutSummary totalCartPrice={totalCartPrice} />
    </section>
  );
}

export default CartPage;
