import Cart from '../features/cart/Cart';
import CheckoutSummary from '../features/checkout/CheckoutSummary';

function CartPage() {
  return (
    <section className='section-px my-20 h-screen flex justify-center'>
      <Cart />
      <CheckoutSummary />
    </section>
  );
}

export default CartPage;
