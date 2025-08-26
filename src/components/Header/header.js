import "./header.css";
import { FaRegUserCircle, FaShoppingCart } from "react-icons/fa";
import {Link} from "react-router-dom"
export const Header = ({setDisplayedArray}) => {
  const onClickCart=()=>{
    setDisplayedArray(prev=>prev.map(each=>{
      return ({...each,quantity:1})
    }))
  }
  return (
    <div className="header-container">
      <img
        src="/images/chatgpt-logo.png"
        className="logo-img"
        alt="rice&oil"
      />

      <div className="header-icons">
        <Link to="/cart" style={{textDecoration:"none"}} onClick={onClickCart}>
        <FaShoppingCart className="header-cart-icon" />
        </Link>
        <FaRegUserCircle className="header-user-icon" />
      </div>
    </div>
  );
};
