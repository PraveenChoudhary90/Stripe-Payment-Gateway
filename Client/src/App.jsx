
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './Layout'
import Home from './Pages/Home'
import About from './Pages/About'
import Registration from './Pages/Registration'
import CartData from './Pages/CartData'
import CheckOut from './Pages/CheckOut'
import Success from './Pages/Success'
import Failed from './Pages/Failed'

function App() {


  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path='home' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='registration' element={<Registration/>}/>
      <Route path='cartdata' element={<CartData/>}/>
      <Route path='checkout' element={<CheckOut/>}/>
      <Route path='success' element={<Success/>}/>
      <Route path='failed' element={<Failed/>}/>
      </Route>
     </Routes>
     
     </BrowserRouter>
    </>
  )
}

export default App
