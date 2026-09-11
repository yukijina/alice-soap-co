import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppLayout from './layout/AppLayout';
import Error from './pages/Error';
import Home from './pages/LandingPage/Home';
import OurStoryPage from './pages/OurStoryPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import { action as createOrderAction } from './features/address/AddressForm';
import OrderConfirmationPage from './pages/OrderConfirmationPage';
import ProductDetails, {
  loader as productLoader,
} from './features/product/ProductDetails';
import Products, {
  loader as productsLoader,
} from './features/product/Products';

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
      {
        path: '/shop-all/:productId',
        element: <ProductDetails />,
        loader: productLoader,
      },
      { path: '/cart', element: <CartPage /> },
      {
        path: '/checkout',
        element: <CheckoutPage />,
        action: createOrderAction,
      },
      { path: '/order-confirmation', element: <OrderConfirmationPage /> },
      { path: '/our-story', element: <OurStoryPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
