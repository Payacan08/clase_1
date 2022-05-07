import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Galeria from './components/Galeria';
import Inicio from './components/Inicio';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

function App() {
  return (
    <BrowserRouter>
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<Inicio/>}/>
        <Route path='/productos' element={<ItemListContainer/>}/>
        <Route path='/productos/:itemId' element={<ItemDetailContainer/>}/>
        <Route path='/galeria' element={<Galeria/>}/>
        <Route/>
      </Routes>
    </BrowserRouter>   
  );
}

export default App;
