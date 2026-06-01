import { useState } from 'react'
import './App.css'
import Cart from './Compoenet/cart/Cart'
import Counter from './Compoenet/Counter/Counter'
import Hero from './Compoenet/Hero/Hero'
import NavBar from './Compoenet/NavBar/NavBar'
import { Toaster } from 'react-hot-toast'
import GetStarted from './Compoenet/GetStarted/GetStarted'
import Trial from './Compoenet/Trial/Trial'
import Workflow from './Compoenet/Workflow/Workflow'
import Footer from './Compoenet/Footer/Footer'

function App() {
 const [carts , setcart] = useState([]);

  return (
<>
<NavBar carts={carts} />
<Hero/>
<Counter/>
<Cart  carts={carts} setcart={setcart} />
<GetStarted/>
<Trial/>
<Workflow/>
<Footer/>
<Toaster/>
</>
  )
}

export default App
