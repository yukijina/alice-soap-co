import { useDispatch, useSelector } from 'react-redux';
import { Form, redirect, useNavigation } from 'react-router-dom';
import { createOrder } from '../../services/apiShop';
import { clearCart, getCart, getTotalCartPrice } from '../cart/cartSlice';
import store from '../../store';
import Button from '../../components/Button';

// check valid phone number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );

function AddressForm() {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  const cart = useSelector(getCart);
  const dispatch = useDispatch();

  // const cart = [
  //   {
  //     itemId: '0001',
  //     itemName: 'Lavender Calm',
  //     quantity: 1,
  //     unitPrice: 10,
  //     totalPrice: 10,
  //     image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png',
  //   },
  //   {
  //     itemId: '0002',
  //     itemName: 'Rose Garden',
  //     quantity: 2,
  //     unitPrice: 15,
  //     totalPrice: 30,
  //     image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png',
  //   },
  // ];

  const totalCartPrice = useSelector(getTotalCartPrice);

  return (
    <div className=''>
      <h3 className='font-instrument'>Shipping Address</h3>

      <Form className='mt-5' method='POST'>
        <div className='flex gap-3'>
          <div className='mb-3 flex flex-col gap-2'>
            <label className='text-sm' htmlFor='first-name'>
              First Name
            </label>
            <input
              className='rounded-md bg-white px-3 py-2 outline-1 outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-amber-500'
              type='text'
              name='firstName'
              id='first-name'
              required
            />
          </div>

          <div className='mb-3 flex flex-col gap-2'>
            <label className='text-sm' htmlFor='last-name'>
              Last Name
            </label>
            <input
              className='rounded-md bg-white px-3 py-2 outline-1 outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-amber-500'
              type='text'
              name='lastName'
              id='last-name'
              required
            />
          </div>
        </div>

        <div className='mb-3 flex flex-col gap-2'>
          <label className='text-sm' htmlFor='email'>
            Email Address
          </label>
          <input
            className='rounded-md bg-white px-3 py-2 outline-1 outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-amber-500'
            type='email'
            name='email'
            id='email'
            required
          />
        </div>

        <div className='mb-3 flex flex-col gap-2'>
          <label className='text-sm' htmlFor='phone'>
            Phone Number
          </label>

          <input
            className='rounded-md bg-white px-3 py-2 outline-1 outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-amber-500'
            type='tel'
            name='phone'
            id='phone'
            required
          />
        </div>

        <div className='relative mb-2 flex flex-col gap-2'>
          <label className='text-sm' htmlFor='address'>
            Address
          </label>
          <input
            className='rounded-md bg-white px-3 py-2 outline-1 outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-amber-500'
            type='text'
            name='adddressLine1'
            id='address'
            placeholder='Street address'
            required
          />
          <input
            className='rounded-md bg-white px-3 py-2 outline-1 outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-amber-500'
            type='text'
            name='adddressLine2'
            placeholder='Apt, Suite (Optional)'
          />

          <input
            className='rounded-md bg-white px-3 py-2 outline-1 outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-amber-500'
            type='text'
            name='city'
            placeholder='City'
            required
          />

          <div className='flex gap-2'>
            <input
              className='rounded-md bg-white px-3 py-2 outline-1 outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-amber-500'
              type='text'
              name='zipCode'
              placeholder='Zip Code'
              required
            />

            <input
              className='rounded-md bg-white px-3 py-2 outline-1 outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-amber-500'
              type='text'
              name='state'
              placeholder='State'
              required
            />
          </div>
        </div>
        <div>
          {/* include cart data and totalPrice in submit form */}
          <input type='hidden' name='cart' value={JSON.stringify(cart)} />
          <input type='hidden' name='totalCartPrice' value={totalCartPrice} />
          <Button type='dark'>
            {isSubmitting ? 'Placing order...' : `Order now`}
          </Button>
        </div>
      </Form>
    </div>
  );
}

// once the form is submitted it is called by react-router
export async function action({ request }) {
  const formData = await request.formData();
  // convert to object
  const data = Object.fromEntries(formData);
  console.log(data);
  const order = {
    ...data,
    cart: JSON.parse(data.cart),
  };

  console.log(order.cart);
  const newOrder = await createOrder(order);
  store.dispatch(clearCart());
  return redirect(`/order-confirmation`);
}

export default AddressForm;
