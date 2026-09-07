import ConfirmationImg from '../assets/orderConfirmation.png';
import Button from '../components/Button';

function OrderConfirmationPage() {
  return (
    <div className='section-px flex flex-col items-center justify-center gap-2 mb-20'>
      <div>
        <img src={ConfirmationImg} alt='order confirmed' />
      </div>
      <h3>Order confirmed</h3>
      <p>Thank you for your order!</p>
      <h4>
        Your order confirmation number is{' '}
        <span className='font-semibold'>12345.</span>
      </h4>

      <div>
        <p>This page will be automaticallyredirect to Home.</p>
        <p>Or you can go back to home page &darr;</p>
      </div>
      <Button to='/' type='dark'>
        Go back to Home
      </Button>
    </div>
  );
}

export default OrderConfirmationPage;
