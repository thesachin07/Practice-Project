import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>Welcome to Amazon</h1>

      <Link to="/products">
        View Products
      </Link>
    </div>
  );
}