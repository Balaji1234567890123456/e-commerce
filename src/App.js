import logo from './logo.svg';
import './App.css';
import {useState} from "react"
import { Header } from './components/Header/header';
import { Home } from './components/Home/home';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { Products } from './components/Products/product';
import { Cart } from './components/Cart/cart';
import { products } from './components/Products/product';


function App() {
  const [cart,setCart]=useState([])
  const [displayedArray,setDisplayedArray]=useState(products)
  return (
    <>
    <BrowserRouter>
    
    <Header setDisplayedArray={setDisplayedArray}/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/products" element={<Products cart={cart} setCart={setCart} displayedArray={displayedArray} setDisplayedArray={setDisplayedArray}/>}/>
      <Route path="/cart" element={<Cart cart={cart} setCart={setCart}/>}/>
    </Routes>
    
    </BrowserRouter>
    </>
  );
}

export default App;
