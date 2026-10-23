import { Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './pages/Home'
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail'
import ProductReview from './pages/ProductReview'
import NotFound from './pages/NotFound'

function App() {
  return (
    <>
    <Navbar/>
      

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
        <Route path="/review" element={<ProductReview />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
