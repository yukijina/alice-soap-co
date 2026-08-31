import { useDispatch } from 'react-redux';
import Button from '../../components/Button';
import { addItem } from '../Cart/cartSlice';

function Product({ soap }) {
  const { id, title, image, category, price } = soap;
  const dispatch = useDispatch();

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
  }

  return (
    <div className='bg-orange-100 rounded-2xl py-5 px-3 w-100 h-120'>
      <div className='flex justify-center pb-12'>
        <img src={image} alt={title} className='size-60 object-contain' />
      </div>
      <h5>{title}</h5>
      <p className='text-stone-500 mb-3'>{category}</p>
      <p className='font-semibold mb-2'>US$ {price}</p>

      <Button type='dark' onClick={handleAddToCart}>
        Add to Cart
      </Button>
    </div>
  );
}

export default Product;
