import { useSelector } from 'react-redux';
import EmptyCart from './EmptyCart';
import CartItem from './CartItem';

/*
const fakeCart = [
  {
    itemId: '0001',
    itemName: 'Lavender Calm',
    quantity: 1,
    unitPrice: 10,
    totalPrice: 10,
    image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png',
  },
  {
    itemId: '0002',
    itemName: 'Rose Garden',
    quantity: 2,
    unitPrice: 15,
    totalPrice: 30,
    image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png',
  },
  {
    itemId: '0003',
    itemName: 'Citrus Grove',
    quantity: 1,
    unitPrice: 12,
    totalPrice: 32,
    image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png',
  },
];
*/

function Cart({ cart }) {
  // const cart = fakeCart;
  // const cart = useSelector((state) => state.cart.cart);
  console.log(cart);

  return (
    <div className='basis-2xl'>
      <h3 className='font-instrument'>
        Your Cart <span className='text-sm'>({cart.length} item)</span>
      </h3>
      <div className='mt-10'>
        {cart.map((item) => (
          <CartItem item={item} key={item.itemId} />
        ))}
      </div>
    </div>
  );
}

export default Cart;
