import Logo from '../components/Logo';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <nav className='flex flex-row items-center justify-between py-5 section-px'>
      <Logo />
      <ul className='flex flex-row gap-6'>
        <li>
          <NavLink to='/product'>Shop</NavLink>
        </li>
        <li>Our Story</li>
        <li>Farmer's Market</li>
        <li>Soap Quiz</li>
        <li>Cart</li>
      </ul>
    </nav>
  );
}

export default NavBar;
