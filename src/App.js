
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

function App() {
  return (
    <>
      <NavBar></NavBar>
      <ItemListContainer greeting={"Lista de Productos"}></ItemListContainer></>
  );
}

export default App;
