import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import {
  addItem,
  getCurrentQuantityById,
  increaseItemQuantity,
} from '../cart/cartSlice';
import Button from '../../components/Button';
import Popup from '../../components/Popup';
import { CiFaceSmile } from 'react-icons/ci';

function Product({ soap }) {
  const { id, title, image, category, price } = soap;
  const dispatch = useDispatch();
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const currentQuantity = useSelector(getCurrentQuantityById(id));
  const isInCart = currentQuantity > 0;

  function handleAddToCart() {
    const newItem = {
      itemId: id,
      itemName: title,
      quantity: 1,
      unitPrice: price,
      totalPrice: price * 1,
      image,
    };
    dispatch(addItem(newItem));
    setIsPopupOpen(true);

    // Close modal in 1 second
    setTimeout(() => {
      setIsPopupOpen(false);
    }, 1500);
  }

  function handleIncreaseQuantity() {
    dispatch(increaseItemQuantity(id));
    setIsPopupOpen(true);

    // Close modal in 1 second
    setTimeout(() => {
      setIsPopupOpen(false);
    }, 1500);
  }

  return (
    <div className='bg-orange-100 rounded-2xl py-5 px-3 w-100 h-120'>
      <div className='flex justify-center pb-12'>
        <img src={image} alt={title} className='size-60 object-contain' />
      </div>
      <h5>{title}</h5>
      <p className='text-stone-500 mb-3'>{category}</p>
      <p className='font-semibold mb-2'>US$ {price}</p>

      {/* If the item is already in the cart, item's quantity is increase, if not. it will be added to the cart */}
      <Button
        type='dark'
        onClick={isInCart ? handleIncreaseQuantity : handleAddToCart}
      >
        Add to Cart
      </Button>

      {/* Popup Modal for deleting item */}
      <Popup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)}>
        <div className='flex items-center justify-center'>
          <p>The item has been added to your cart</p>
          &nbsp;
          <CiFaceSmile />
        </div>
      </Popup>
    </div>
  );
}

export default Product;
