import { Outlet, useNavigation } from 'react-router-dom';
import NavBar from './NavBar';
import Footer from './Footer';
import Loader from './Loader';

function AppLayout() {
  const navigation = useNavigation();
  console.log(navigation);
  const isLoading = navigation.state === 'loading';

  return (
    <div>
      {isLoading && <Loader />}
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
