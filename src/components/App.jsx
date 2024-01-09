
import './App.css';
import 'react-toastify/dist/ReactToastify.css'

//Router DOM
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

//Context


//Toastify
import { ToastContainer } from 'react-toastify';

//Componentes
import Navbar from './navbar/Navbar';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';
import Cart from './Cart/Cart';
import Checkout from './Checkout/Checkout';

const App = () => {

  return (
    <>
   
     <Router>
        
          <Navbar/>
          <Routes>
            <Route path='/' element={<ItemListContainer/>}/>
            <Route path='/product/:id' element={<ItemDetailContainer/>}/>
            <Route path='/category/:category' element={<ItemListContainer/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/checkout' element={<Checkout/>}/>
          </Routes>
        <ToastContainer/>
       
        
      </Router>
     
    </>
  );
}

export default App;
