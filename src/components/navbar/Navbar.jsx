import React from "react";
import "./Navbar.css";
import { Cart } from "react-bootstrap-icons";

const Navbar = ({ onClick, basketCount }) => {
   return (
      <nav>
         <div className="nav-wrapper">
            <div className="navbar_logo">Dogs4Life</div>
            <div className="navbar_search-container">
               <input type="text" />
               <button>Search</button>
            </div>
            <div className="navbar_cart-container" onClick={onClick}>
               <div className="cart-container-btn">
                  <Cart size={25} className="cart-container-icon" />
                  <div>Basket</div>
               </div>
               <div className="cart-container-number">{basketCount}</div>
            </div>
         </div>
      </nav>
   );
};

export default Navbar;
