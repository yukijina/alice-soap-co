import ConfirmationImg from '../assets/orderConfirmation.png';
import Button from '../components/Button';

function OrderConfirmationPage() {
  //temporaly order number
  const orderNumber = String(Math.floor(Math.random() * 100000)).padStart(
    5,
    '0'
  );
  return (
    <div className='section-px flex flex-col items-center justify-center gap-2 mb-20'>
      <div>
        <img src={ConfirmationImg} alt='order confirmed' />
      </div>
      <h3>Order confirmed</h3>
      <p>Thank you for your order!</p>
      <h4>
        Your order confirmation number is{' '}
        <span className='font-semibold'>{orderNumber}.</span>
      </h4>

      <p className='mb-5'>You can go back to home page &darr;</p>

      <Button to='/' type='dark'>
        Go back to Home
      </Button>
    </div>
  );
}

export default OrderConfirmationPage;
