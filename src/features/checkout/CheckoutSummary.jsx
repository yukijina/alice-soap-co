function CheckoutSummary({ totalCartPrice }) {
  console.log(totalCartPrice);
  const shippingCost = 8;
  const tax = 0;
  const totalPrice = totalCartPrice + shippingCost + tax;

  return (
    <div>
      <table className='table-auto'>
        <thead>
          <tr>
            <th className='text-lg pb-10'>Order Summary</th>
          </tr>
        </thead>
        <tbody className='bg-orange-100'>
          <tr>
            <td className='px-8 py-2'>Subtotal</td>
            <td className='px-8 py-2'>${totalCartPrice.toFixed(2)}</td>
          </tr>

          <tr>
            <td className='px-8 py-2'>Shipping</td>
            <td className='px-8 py-2'> ${shippingCost.toFixed(2)}</td>
          </tr>

          <tr>
            <td className='px-8 py-2'>Estimated Tax</td>
            <td className='px-8 py-2'>${tax.toFixed(2)}</td>
          </tr>

          <tr className='border-t border-gray-300 font-semibold'>
            <td className='px-8 py-2'>Estimated Total</td>
            <td className='px-8 py-2'>${totalPrice.toFixed(2)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CheckoutSummary;
