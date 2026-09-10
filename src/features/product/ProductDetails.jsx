import MainImg from '../../assets/lavender.png';
import Button from '../../components/Button';

function ProductDetails({ product }) {
  return (
    <section className='section-px'>
      <div>
        <img src={MainImg} alt='Main Image' />
      </div>

      <div>
        <h2>title</h2>
        <p>$12.00</p>
        <p>details</p>
        <Button type='dark'>Add to cart</Button>
      </div>
    </section>
  );
}

export default ProductDetails;
