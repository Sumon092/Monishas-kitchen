
import './App.css';
import Header from './pages/Shared/Header/Header';
import Footer from './pages/Shared/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import About from './pages/About/About';
import SignIn from './pages/SignIn/SignIn/SignIn';
import SignUp from './pages/SignIn/SignUp/SignUp';
import Home from './pages/Home/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import Service from './pages/Home/Service/Service';
import Services from './pages/Home/Services/Services';
import Checkout from './pages/Checkout/Checkout';
import RequiredAuth from './pages/SignIn/RequiredAuth/RequiredAuth';
import Blogs from './pages/Blogs/Blogs';
import WhyMe from './pages/Home/WhyMe/WhyMe';
import CheckoutDetail from './pages/CheckoutDetail/CheckoutDetail';

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/signIn' element={<SignIn />}></Route>
        <Route path='/signUp' element={<SignUp />}></Route>
        <Route path='/whyme' element={<WhyMe></WhyMe>}></Route>
        <Route path='/checkout' element={
          //required auth for private or protected route.
          <RequiredAuth>
            <Checkout />
          </RequiredAuth>
        }></Route>
        <Route path='/services' element={<Services />}></Route>
        <Route path='/service' element={<Service />}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/checkoutdetail' element={<CheckoutDetail />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
