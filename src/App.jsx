import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import Navbar from './components/NavBar/Navbar'
import ItemListContainer from './components/itemListContainer/itemListContainer'
import Cart from './components/Cart/Cart'
import { ItemDetailContainer } from './components/itemDetailContainer/itemDetailContainer'

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/home' element={<ItemListContainer />} />
          <Route path='/categoria/:idCategoria' element={<ItemListContainer />}/>
          <Route path='/detail/:idProducto' element={<ItemDetailContainer/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='*' element={<Navigate to='/'/>}/>
        </Routes>
      </BrowserRouter>
      
      

    </>
  )
}

export default App
