import { useLoaderData } from 'react-router-dom';
import { getProduct } from '../../services/apiProducts';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Popup from '../../components/Popup';
import Button from '../../components/Button';
import { CiFaceSmile } from 'react-icons/ci';
import {
  addItem,
  getCurrentQuantityById,
  increaseItemQuantity,
} from '../cart/cartSlice';

function ProductDetails() {
  const product = useLoaderData();
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
    <section className='section-px flex my-10 flex-col md:flex-row'>
      <div>
        <img src={image} alt={name} />
      </div>

      <div>
        <h2>{name}</h2>
        <p className='font-semibold'>${price}</p>
        <p className='mt-5 mb-8 text-lime-800'>{description}</p>
        <p className='mb-2'>Scent Note: {scentNote}</p>
        <p className='mb-10'>Ingredients: {ingredients}</p>

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
    </section>
  );
}

export async function loader({ params }) {
  // console.log(params);
  const item = await getProduct(params.productId);
  return item;
}

export default ProductDetails;
