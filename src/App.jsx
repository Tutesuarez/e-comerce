import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/NavBar/Navbar'
import ItemListContainer from './components/itemListContainer/itemListContainer'
import Cart from './components/Cart/Cart'
import { ItemDetail } from './components/itemDetailContainer/itemDetail'

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/home' element={<ItemListContainer />} />
          <Route path='/categoria/:idCategoria' element={<ItemListContainer />}/>
          <Route path='/detail/:idProducto' element={<ItemDetail/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
      </BrowserRouter>
      
      

    </>
  )
}

export default App
