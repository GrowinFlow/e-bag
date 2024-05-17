
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home'
// import About from './pages/About'
import Products from './pages/Products'
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
    {/* <Route path="/about" element={<About />}/> */}
    <Route path="/products" element={<Products />}/>
    <Route path="/contact" element={<Contact />}/>
    <Route path="/singleproduct" element={<SingleProduct />}>
      <Route path="/singleproduct/:id" element={<SingleProduct />} />
    </Route>
    <Route path="/cart" element={<Cart />}/>
    <Route path="/*" element={<ErrorPage />}/>
  </Routes>
    <Footer/>
</Router>
  );
}

export default App;
