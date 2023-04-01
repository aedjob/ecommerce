import { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer />
      {/* <ItemCount initial={1} stock={8} onAdd={(quantity) => console.log('Added quantity', quantity)}/> */}
    </div>
  )
}

export default App;
 