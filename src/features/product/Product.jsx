import Button from '../../components/Button';

function Product({ soap }) {
  return (
    <div className='bg-orange-100 rounded-2xl py-5 px-3 w-100 h-120'>
      <div className='flex justify-center pb-12'>
        <img
          src={soap.image}
          alt={soap.title}
          className='size-60 object-contain'
        />
      </div>
      <h5>{soap.title}</h5>
      <p className='text-stone-500 pb-3'>{soap.category}</p>
      <p className='font-semibold'>US$ {soap.price}</p>
      <div>
        <Button to='#' type='dark'>
          Add to Cart
        </Button>
      </div>
    </div>
  );
}

export default Product;
