import { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/category/:cid' element={<ItemListContainer />} />
          
          <Route path='/detail/:pid' element={<ItemDetailContainer />} />

          <Route path='*' element={<Navigate to='/'/>} />
          {/* <ItemCount initial={1} stock={8} onAdd={(quantity) => console.log('Added quantity', quantity)}/> */}
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;
 