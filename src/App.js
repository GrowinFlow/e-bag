
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home'
import About from './pages/About'
import Shop from './pages/Shop'
import Contact from './pages/Contact'
import SingleProduct from './pages/SingleProduct'
import Cart from './pages/Cart'
import ErrorPage from './pages/ErrorPage';

import Navbar from './components/Navbar';
import Footer from './components/Footer';


function App() {
  return (
 
<Router>
  <Navbar />
  <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/about" element={<About />}/>
    <Route path="/shop" element={<Shop />}/>
    <Route path="/shop/:category" element={<Shop />}/>
    <Route path="/contact" element={<Contact />}/>
    
    <Route path="/product" element={<SingleProduct />}>
      <Route path="/product/:id" element={<SingleProduct />} />
    </Route>
    <Route path="/cart" element={<Cart />}/>
    <Route path="/*" element={<ErrorPage />}/>
  </Routes>
    <Footer/>
</Router>
  );
}

export default App;
