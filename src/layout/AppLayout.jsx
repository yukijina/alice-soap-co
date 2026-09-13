import { Outlet, useNavigation } from 'react-router-dom';
import NavBar from './NavBar';
import Footer from './Footer';
import Loader from './Loader';
import ScrollToTop from '../components/ScrollToTop';
import Logo from '../components/Logo';

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';

  return (
    <div>
      {isLoading && <Loader />}
      <ScrollToTop />
      <NavBar />
      <div>
        {/* check App.jsx for outlet contents  */}
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default AppLayout;
