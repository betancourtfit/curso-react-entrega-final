import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import { CarritoProvider } from './context/CarritoContext';
import Formulario from './components/Formulario/Formulario';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';

<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
  integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"

/>

function App() {

  return (
    <>
      <BrowserRouter> 
        <CarritoProvider>
          <NavBar/>
            <Routes>
              <Route path="/" element = {<Home/>}/>
              <Route path="/categoria/:idCategoria" element={<ItemListContainer/>}/>
              <Route path="/item/:idItem" element={<ItemDetailContainer/>}/>
              <Route path='/cart' element={<Cart/>} />
              <Route path='/checkout' element={<Checkout/>}/>
              <Route path="/admin" element={<Formulario/>}/>
              <Route path="*" element={<h2>Seccion en construccion</h2>}/>
            </Routes>
        </CarritoProvider>
      </BrowserRouter>
    </>
  )
}

export default App;
