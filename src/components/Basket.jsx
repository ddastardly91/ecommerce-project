import React, { useContext } from "react";
import "./Basket.css";
import { XCircleFill } from "react-bootstrap-icons";
import { MyContext } from "../context";

const Basket = () => {
   const context = useContext(MyContext);

   return (
      <div
         className={`basket-container ${
            context.state.showBasket ? "basket-open" : "basket-closed"
         }`}
      >
         <div className="basket-header">
            <h1>Basket</h1>
            <XCircleFill
               className="basket-close"
               onClick={context.handleBasketClick}
            />
         </div>

         <div className="basket-items-container">
            {context.state.basketCount > 0 ? (
               context.state.basketItems.map((item) => {
                  return (
                     <div className="item-container" key={item.id}>
                        <img src={item.url} alt={item.name} />
                        <div className="item-details">
                           <h3>{item.name}</h3>
                           <p>{item.breed}</p>
                        </div>
                        <div className="item-price">
                           <h4>${item.price}</h4>
                        </div>
                        <div>
                           <XCircleFill
                              className="remove-item"
                              onClick={() => context.removeBasketItem(item.id)}
                           />
                        </div>
                     </div>
                  );
               })
            ) : (
               <h3 className="empty-cart-text">No items in cart</h3>
            )}
            <h2 className="total-price">Total: ${context.state.basketTotal}</h2>
            <button
               className="btn-checkout"
               onClick={() => console.log(context.basketItems)}
            >
               CHECKOUT
            </button>
            <button className="btn-checkout" onClick={context.handleEmptyCart}>
               EMPTY CART
            </button>
         </div>
      </div>
   );
};

export default Basket;
