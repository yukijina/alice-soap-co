import { Link } from 'react-router-dom';

function Button({ children, to, type, onClick }) {
  const base =
    'inline-block text-sm rounded-full font-semibold tracking-wide transition-colors duration-300 focus:outline-none focus:ring focus:ring-taupe-700 focus:ring-offset-2 px-6 py-3';

  const styles = {
    dark: base + ' bg-taupe-800 text-slate-50 hover:bg-taupe-700',
    light: base + ' border border-taupe-800 hover:bg-amber-100',
  };
  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );
}

export default Button;
