import { useState } from 'react'
import ProductList from './pages/ProductList'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <ProductList/>
      <Footer/>
    </>
  )
}

export default App
