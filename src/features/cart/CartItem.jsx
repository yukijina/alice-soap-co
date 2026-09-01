import { CiTrash } from 'react-icons/ci';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  decreaseItemQuantity,
  deleteItem,
  increaseItemQuantity,
} from './cartSlice';
import Button from '../../components/Button';
import Popup from '../../components/Popup';

function CartItem({ item }) {
  // console.log(item);
  const { itemId, itemName, quantity, unitPrice, totalPrice, image } = item;

  const dispatch = useDispatch();
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  function handleCloseAndDecrease() {
    setIsPopupOpen(false);
    dispatch(deleteItem(itemId));
  }

  return (
    <div className='mb-3 bg-orange-100'>
      <div className='flex justify-between gap-3 px-5 py-6'>
        <div className='basis-20'>
          <img src={image} alt={itemName} />
        </div>
        <p className='self-center'>{itemName}</p>
        <div className='flex flex-col justify-between items-center'>
          {/* delete item buttton */}
          <button
            className='hover:text-red-500 hover:scale-115 duration-300 ease-out'
            onClick={() => setIsPopupOpen(true)}
          >
            <CiTrash className='self-end text-2xl' />
          </button>

          {/* update quantity */}
          <p>Quantity</p>
          <div className='flex gap-5'>
            <Button
              type='round'
              onClick={() => dispatch(decreaseItemQuantity(itemId))}
            >
              -
            </Button>
            <p className='self-center'>{quantity}</p>
            <Button
              type='round'
              onClick={() => dispatch(increaseItemQuantity(itemId))}
            >
              +
            </Button>
          </div>
          <p>${totalPrice}</p>
        </div>

        {/* Popup Modal for deleting item */}
        <Popup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)}>
          <p>
            Are you sure if you'd like to remove this product from your cart?
          </p>
          <button
            className='inline-block text-sm rounded-full font-semi
            bold tracking-wide transition-colors duration-300 focus:outline-none focus:ring focus:ring-taupe-700 focus:ring-offset-2  bg-taupe-800 text-slate-50 hover:bg-taupe-700 px-6 py-3 mt-5'
            onClick={handleCloseAndDecrease}
            // onClick={() => setIsPopupOpen(false)}
          >
            Confirm
          </button>
        </Popup>
      </div>
    </div>
  );
}

export default CartItem;
