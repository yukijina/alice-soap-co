import Logo from '../components/Logo';
import { NavLink } from 'react-router-dom';

function NavBar() {
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
        <li tabIndex='0'>Cart</li>
      </ul>
    </nav>
  );
}

export default NavBar;
