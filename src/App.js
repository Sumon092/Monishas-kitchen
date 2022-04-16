import logo from './logo.svg';
import './App.css';
import Header from './pages/Shared/Header/Header';
import Footer from './pages/Shared/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import About from './pages/About/About';
import SignIn from './pages/SignIn/SignIn/SignIn';
import SignUp from './pages/SignIn/SignUp/SignUp';
import Home from './pages/Home/Home/Home';
import NotFound from './pages/NotFound/NotFound';

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/signIn' element={<SignIn />}></Route>
        <Route path='/signUp' element={<SignUp />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
