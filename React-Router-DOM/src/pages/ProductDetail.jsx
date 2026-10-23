import { useParams, Link } from "react-router-dom";
import { Product } from "../data/Product.js";

export default function ProductDetails() {
  const { productId } = useParams();

  const selectedProduct = Product.find(
    (item) => item.id === productId
  );

  if (!selectedProduct) {
    return <h2>Product not found</h2>;
  }

  return (
    <div>
      <h1>{selectedProduct.name}</h1>
      <p>Price: ₹{selectedProduct.price}</p>

      <Link to="/products">
        Back to Products
      </Link>
    </div>
  );
}