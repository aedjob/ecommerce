import { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Cart from './components/Cart/Cart'
import { CartProvider } from './context/CartContext';
import { CartContext } from './context/CartContext';

import Checkout from './components/Checkout/Checkout';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/category/:cid' element={<ItemListContainer />} />
            <Route path='/detail/:pid' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart />}/>
            <Route path='/checkout' element={<Checkout />}/>
            <Route path='*' element={<h1>404 NOT FOUND</h1>} />
            {/* <ItemCount initial={1} stock={8} onAdd={(quantity) => console.log('Added quantity', quantity)}/> */}
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
 