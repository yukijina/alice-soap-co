import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import {
  addItem,
  getCurrentQuantityById,
  increaseItemQuantity,
} from '../cart/cartSlice';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import Popup from '../../components/Popup';
import { CiFaceSmile } from 'react-icons/ci';

function ProductCard({ product }) {
  const { id, name, description, scentNote, ingredients, image, price } =
    product;
  const dispatch = useDispatch();
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const currentQuantity = useSelector(getCurrentQuantityById(id));
  const isInCart = currentQuantity > 0;

  function handleAddToCart() {
    const newItem = {
      itemId: id,
      itemName: name,
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
    <div className='bg-orange-100 rounded-2xl py-5 px-3 w-100 h-120 flex flex-col justify-center'>
      {/* apply link inside this div */}
      <div className='isolate relative'>
        <div className='flex justify-center pb-10'>
          <img src={image} alt={name} className='size-60 object-contain' />
        </div>
        <h5>
          <Link to={`/shop-all/${id}`}>
            <span className='absolute inset-0 z-10'></span>
            {name}
          </Link>
        </h5>
        <p className='text-stone-500'>{scentNote}</p>
        <p className='font-semibold mb-5'>US$ {price}</p>
      </div>

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

export default ProductCard;
