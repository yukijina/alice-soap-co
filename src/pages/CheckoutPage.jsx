import AddressForm from '../features/address/AddressForm';
import CheckoutSummary from '../features/checkout/CheckoutSummary';

function CheckoutPage() {
  return (
    <section className='section-px my-20 '>
      <div className='flex justify-center gap-20'>
        <AddressForm />
        <CheckoutSummary />
      </div>
      <div className='mt-10 flex justify-center'>
        <p className='text-red-400 bg-red-50 px-5 py-3 '>
          This website is a fictional portfolio project created for
          demonstration purposes only. Actual order won't be placed.
        </p>
      </div>
    </section>
  );
}

export default CheckoutPage;
