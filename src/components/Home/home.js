import "./home.css";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="home-container">
      <h1 className="main-headline">
        Pure Rice & Premium Oils Delivered to Your Doorstep
      </h1>
      <p className="main-subtext">
        Fresh, high-quality staples for your kitchen. Fast delivery and trusted
        brands at the best prices.
      </p>
      <Link style={{textDecoration:"none"}} to="/products">
      <button className="shop-btn">Shop Now</button>
      </Link>
    </div>
  );
};
