import { useSelector } from 'react-redux';
import Logo from '../components/Logo';
import { NavLink } from 'react-router-dom';

function NavBar() {
  const quantityInCart = useSelector((state) => state.cart.cart).length;

  return (
    <nav className='flex flex-row items-center justify-between py-5 section-px'>
      <Logo />
      <ul className='flex flex-row gap-6'>
        <li>
          <NavLink to='/shop-all'>Shop</NavLink>
        </li>
        <li>
          <NavLink to='/our-story'>Our Story</NavLink>
        </li>
        <li tabIndex='0'>Farmer's Market</li>
        <li tabIndex='0'>Soap Quiz</li>
        <li>
          <NavLink to='/cart'>
            My Cart <span className='text-xs'>({quantityInCart})</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
