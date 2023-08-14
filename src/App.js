import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import Navbar from "./components/Navbar";
import { CartProvider } from './context/CartContext';
import CartContainer from './components/CartContainer';
import Checkout from './components/Checkout';
import OrderConfirm from './components/OrderConfirm';

function App() {
  return (
    <div className='h-full bg-gray-900'>
      <CartProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<ItemListContainer greeting={'BIENVENIDOS'}/>}/>
            <Route path='/category/:categoryId' element={<ItemListContainer />}/>
            <Route path='/item/:itemId' element={<ItemDetailContainer />}/>
            <Route path='/cart' element={<CartContainer />}/>
            <Route path='/checkout' element={<Checkout />}/>
            <Route path='/order/:id' element={<OrderConfirm />}/>
            <Route path='*' element={<h1 className='text-white text-center'><span className='text-8xl h-full'>404</span> LA PÁGINA NO EXISTE</h1>}/>
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
