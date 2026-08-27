import { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppLayout from './layout/AppLayout';
import PageNotFound from './pages/PageNotFound';
import Home from './pages/LandingPage/Home';
import Products, {
  loader as productsLoader,
} from './features/product/Products';
import OurStory from './pages/OurStory';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <PageNotFound />,

    // Outlet
    children: [
      {
        path: '/',
        element: <Home />,
      },
      // react router can fetch data once it goes to shop-all
      { path: '/shop-all', element: <Products />, loader: productsLoader },
      { path: '/our-story', element: <OurStory /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
