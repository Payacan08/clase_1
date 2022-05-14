import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CartContextProvider from './components/CartContext';
import Galeria from './components/Galeria';
import Inicio from './components/Inicio';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import Cart from './components/Cart'

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
          <Route exact path='/' element={<Inicio/>}/>
          <Route path='/productos' element={<ItemListContainer/>}/>
          <Route path='/productos/:itemId' element={<ItemDetailContainer/>}/>
          <Route path='/galeria' element={<Galeria/>}/>
          <Route path='/carro' element={<Cart/>} />
          <Route/>
        </Routes>
      </BrowserRouter>
    </CartContextProvider>  
  );
}

export default App;
