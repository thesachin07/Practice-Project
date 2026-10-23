import {Link} from 'react-router-dom'
import { Product } from '../data/Product.js'

const Products = () => {
  return (
    <div>
      <h1>Products</h1>
      {Product.map((item) =>(
         <div key={item.id}>
          <h2>{item.name}</h2>
          <p>₹{item.price}</p>

          <Link to={`/product/${item.id}`}>view detail</Link>
          </div>
      ))}
    </div>
  )
}

export default Products;
