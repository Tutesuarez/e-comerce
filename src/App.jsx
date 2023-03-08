import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import Navbar from './components/NavBar/Navbar'
import ItemListContainer from './components/itemListContainer/itemListContainer'
import Cart from './components/Cart/Cart'
import { ItemDetailContainer } from './components/itemDetailContainer/itemDetailContainer'
import {CartContextProvider } from './context/cartContext'


function App() {
  return (
    <>
      
        <BrowserRouter>
        <CartContextProvider>
          <Navbar />
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/home' element={<ItemListContainer />} />
            <Route path='/category/:idCategory' element={<ItemListContainer />} />
            <Route path='/detail/:idProduct' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='*' element={<Navigate to='/' />} />
          </Routes>
          </CartContextProvider>
        </BrowserRouter>


    </>
  )
}

export default App
