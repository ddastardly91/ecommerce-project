import React, { useRef, useContext } from "react";
import "./Navbar.css";
import { Cart } from "react-bootstrap-icons";
import { MyContext } from "../../context";

const Navbar = ({ onClick, basketCount }) => {
   const context = useContext(MyContext);
   const searchText = useRef();

   return (
      <nav>
         <div className="nav-wrapper">
            <div className="navbar_logo">Dogs4Life</div>
            <div className="navbar_search-container">
               <input
                  type="text"
                  ref={searchText}
                  onChange={() => console.log(searchText.current.value)}
               />
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
