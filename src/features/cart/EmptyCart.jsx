import BasketImg from '../../assets/empty-cart-2.png';
import Button from '../../components/Button';

function EmptyCart() {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <div>
        <img src={BasketImg} alt='Empty basket' className='w-200' />
      </div>
      <h2>Your cart is empty</h2>
      <p>Looks like you haven't added any soaps yet.</p>
      <h4 className='mt-2'>
        Explore our handcrafted luxury soaps and find your favorite.
      </h4>
      <Button to='-1' type='light'>
        &larr; Cotinue Shopping
      </Button>
    </div>
  );
}

export default EmptyCart;
