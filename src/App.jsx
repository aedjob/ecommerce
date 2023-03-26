import { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting={'ecommerce App'}/>
      <ItemCount initial={1} stock={8} onAdd={(quantity) => console.log('Added quantity', quantity)}/>
    </div>
  )
}

export default App;
 