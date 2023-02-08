import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import Navbar from './components/NavBar/Navbar'
import ItemListContainer from './components/itemListContainer/itemListContainer'
import { ItemDetailContainer } from './components/itemDetailConteiner/itemDetailContainer'
import Cart from './components/Cart/Cart'

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/home' element={<ItemListContainer />} />
          <Route path='/categoria/:idCategoria' element={<ItemListContainer />}/>
          <Route path='/detail/:idProducto' element={<ItemDetailContainer/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
      </BrowserRouter>
      
      

    </>
  )
}

export default App
