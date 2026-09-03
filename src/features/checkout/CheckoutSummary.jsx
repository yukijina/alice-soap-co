import { useSelector } from 'react-redux';
import { getTotalCartPrice } from '../cart/cartSlice';
import { useLocation } from 'react-router-dom';
import Button from '../../components/Button';

function CheckoutSummary() {
  // console.log(totalCartPrice);
  const totalCartPrice = useSelector(getTotalCartPrice);
  const shippingCost = 8;
  const tax = 0;
  const totalPrice = totalCartPrice + shippingCost + tax;
  const location = useLocation();
  console.log(location.pathname);

  return (
    <div className='flex flex-col items-center'>
      <table className='table-auto mb-5'>
        <thead>
          <tr>
            <th className='text-lg pb-10'>Order Summary</th>
          </tr>
        </thead>
        <tbody className='bg-orange-100'>
          <tr>
            <td className='px-8 py-2'>Subtotal</td>
            <td className='px-8 py-2'>${totalCartPrice.toFixed(2)}</td>
          </tr>

          <tr>
            <td className='px-8 py-2'>Shipping</td>
            <td className='px-8 py-2'> ${shippingCost.toFixed(2)}</td>
          </tr>

          <tr>
            <td className='px-8 py-2'>Estimated Tax</td>
            <td className='px-8 py-2'>${tax.toFixed(2)}</td>
          </tr>

          <tr className='border-t border-gray-300 font-semibold'>
            <td className='px-8 py-2'>Estimated Total</td>
            <td className='px-8 py-2'>${totalPrice.toFixed(2)}</td>
          </tr>
        </tbody>
      </table>

      {location.pathname === '/cart' && (
        <Button to='/checkout' type='dark'>
          Proceed to checkout
        </Button>
      )}

      {location.pathname === '/checkout' && (
        <Button to='#' type='dark'>
          Complete payment with Venmo
        </Button>
      )}
    </div>
  );
}

export default CheckoutSummary;
