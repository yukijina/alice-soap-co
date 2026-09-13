import { useSelector } from 'react-redux';
import Logo from '../components/Logo';
import { NavLink } from 'react-router-dom';
import { getTotalQuantity } from '../features/cart/cartSlice';
import { CiMenuBurger } from 'react-icons/ci';
import { CiMenuFries } from 'react-icons/ci';
import { useState } from 'react';

function NavBar() {
  const quantityInCart = useSelector(getTotalQuantity);
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <nav className='flex flex-row items-center justify-between py-5 section-px'>
        <Logo />

        {/* Desktop Navigation Link */}
        <ul className='hidden md:flex flex-row gap-6'>
          <li>
            <NavLink
              to='/shop-all'
              className='hover:text-stone-400 transition-colors duration-300'
            >
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/our-story'
              className='hover:text-stone-400 transition-colors duration-300'
            >
              Our Story
            </NavLink>
          </li>
          <NavLink
            to='/our-booth'
            className='hover:text-stone-400 transition-colors duration-300'
          >
            Farmer's Market
          </NavLink>
          <NavLink
            to='/soap-quiz'
            className='hover:text-stone-400 transition-colors duration-300'
          >
            Soap Quiz
          </NavLink>
          <li>
            <NavLink
              to='/cart'
              className='hover:text-stone-400 transition-colors duration-300'
            >
              My Cart <span className='text-xs'>({quantityInCart})</span>
            </NavLink>
          </li>
        </ul>

        <div className='md:hidden'>
          {isOpen ? (
            // When it is open
            <div className='fixed top-0 right-2 h-full w-full bg-amber-200 py-9 px-10 z-10 transition-colors duration-700 ease-in-out'>
              <div className='flex flex-col items-center gap-10'>
                <button
                  className='text-xl self-end hover:text-orange-500 transition-colors duration-300'
                  onClick={handleClick}
                >
                  <CiMenuFries />
                </button>
                <ul className='md:hidden '>
                  <li className='pb-2 hover:text-stone-400 transition-colors duration-300'>
                    <NavLink to='/shop-all' onClick={handleClick}>
                      Shop
                    </NavLink>
                  </li>
                  <li className='pb-2 hover:text-stone-400 transition-colors duration-300'>
                    <NavLink to='/our-story' onClick={handleClick}>
                      Our Story
                    </NavLink>
                  </li>
                  <li className='pb-2 hover:text-stone-400 transition-colors duration-300'>
                    <NavLink to='/our-booth' onClick={handleClick}>
                      Farmer's Market
                    </NavLink>
                  </li>
                  <li className='pb-2 hover:text-stone-400 transition-colors duration-300'>
                    <NavLink to='/soap-quiz' onClick={handleClick}>
                      Soap Quiz
                    </NavLink>
                  </li>
                  <li className='pb-2 hover:text-stone-400 transition-colors duration-300'>
                    <NavLink to='/cart' onClick={handleClick}>
                      My Cart{' '}
                      <span className='text-xs'>({quantityInCart})</span>
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            // When it is closed
            <button
              className='text-xl hover:text-orange-500 transition-colors duration-300'
              onClick={handleClick}
            >
              <CiMenuBurger />
            </button>
          )}
        </div>

        {/* Mobile Navigation Link */}
        {/* <div className='md:hidden ml-auto'>
          <button
            className='text-xl hover:text-orange-500 transition-colors duration-30'
            onClick={handleClick}
          >
            {isOpen ? (
              <CiMenuFries className='h6 w-6' />
            ) : (
              <CiMenuBurger className='h-6 w-6' />
            )}
          </button>
        </div>

        <div
          className={`md:hidden absolute top-16 left-0 w-full h-full bg-amber-200 transition-colors duration-700 ease-in-out ${
            isOpen ? 'opacity-100 visible' : 'opacity-0  invisible '
          }`}
        >
          <ul className='md:hidden '>
            <li className='pb-2 hover:text-stone-400 transition-colors duration-300'>
              <NavLink to='/shop-all' onClick={handleClick}>
                Shop
              </NavLink>
            </li>
            <li className='pb-2 hover:text-stone-400 transition-colors duration-300'>
              <NavLink to='/our-story' onClick={handleClick}>
                Our Story
              </NavLink>
            </li>
            <li className='pb-2 hover:text-stone-400 transition-colors duration-300'>
              <NavLink to='/our-booth' onClick={handleClick}>
                Farmer's Market
              </NavLink>
            </li>
            <li className='pb-2 hover:text-stone-400 transition-colors duration-300'>
              <NavLink to='/soap-quiz'>Soap Quiz</NavLink>
            </li>
            <li className='pb-2 hover:text-stone-400 transition-colors duration-300'>
              <NavLink to='/cart'>
                My Cart{' '}
                <span className='text-xs' onClick={handleClick}>
                  ({quantityInCart})
                </span>
              </NavLink>
            </li>
          </ul>
        </div> */}
      </nav>
    </>
  );
}

export default NavBar;
