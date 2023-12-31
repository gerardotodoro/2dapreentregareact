import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting={'Bievenidos a Natural Made'} />
      <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log('Catidad agregada',quantity)}/>
    </div>
  );
}

export default App;
