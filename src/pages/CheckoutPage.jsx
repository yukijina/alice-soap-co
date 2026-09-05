import AddressForm from '../features/address/AddressForm';
import CheckoutSummary from '../features/checkout/CheckoutSummary';

function CheckoutPage() {
  return (
    <section className='section-px my-20 flex justify-center gap-20'>
      <AddressForm />
      <CheckoutSummary />
    </section>
  );
}

export default CheckoutPage;
