import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppLayout from './layout/AppLayout';
import Error from './pages/Error';
import Home from './pages/LandingPage/Home';
import Products, {
  loader as productsLoader,
} from './features/product/Products';
import OurStoryPage from './pages/OurStoryPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,

    // Outlet
    children: [
      {
        path: '/',
        element: <Home />,
      },
      // react router can fetch data once it goes to shop-all
      {
        path: '/shop-all',
        element: <Products />,
        loader: productsLoader,
      },
      { path: '/cart', element: <CartPage /> },
      { path: '/checkout', element: <CheckoutPage /> },
      { path: '/our-story', element: <OurStoryPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
