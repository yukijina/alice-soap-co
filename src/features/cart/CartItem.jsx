import { CiTrash } from 'react-icons/ci';

function CartItem({ item }) {
  console.log(item);
  const { itemId, itemName, quantity, unitPrice, totalPrice, image } = item;
  return (
    <div className='mb-3 bg-orange-100'>
      <div className='flex justify-between px-2 py-3'>
        <div className='basis-20'>
          <img src={image} alt={itemName} />
        </div>
        <p className='self-center'>{itemName}</p>
        <div className='flex flex-col justify-between'>
          <CiTrash className='self-end text-2xl' />
          <p>Quantity</p>
          <p className='self-center'>{quantity}</p>
          <p>${totalPrice}</p>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
