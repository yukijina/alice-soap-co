import AddressForm from '../features/address/addressForm';
import CheckoutSummary from '../features/checkout/CheckoutSummary';

function CheckoutPage() {
  return (
    <section className='section-px my-20 h-screen'>
      <AddressForm />
      <CheckoutSummary />
    </section>
  );
}

export default CheckoutPage;
