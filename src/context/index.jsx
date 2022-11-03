import React, { Component } from "react";

const MyContext = React.createContext();

class MyProvider extends Component {
   state = {
      basketItems: [],
      basketCount: 0,
      showBasket: false,
      basketTotal: 0,
   };

   handleBasketClick = () => {
      this.setState({
         showBasket: !this.state.showBasket,
      });
   };

   handleAddBasket = (dog) => {
      if (this.state.basketItems.includes(dog)) {
         return false;
      }

      this.setState((prevState) => ({
         basketItems: [...prevState.basketItems, dog],
         basketTotal: prevState.basketTotal + dog.price,
      }));

      this.setState((prevState) => ({
         basketCount: prevState.basketCount + 1,
      }));
   };

   removeBasketItem = (id) => {
      this.setState((prevState) => ({
         basketItems: prevState.basketItems.filter((item) => id !== item.id),
         basketCount: prevState.basketCount - 1,
      }));
   };

   handleEmptyCart = () => {
      this.setState({
         basketItems: [],
         basketCount: 0,
         basketTotal: 0,
      });
   };

   render() {
      return (
         <>
            <MyContext.Provider
               value={{
                  state: this.state,
                  basketItems: this.state.basketItems,
                  basketCount: this.state.basketCount,
                  handleBasketClick: this.handleBasketClick,
                  handleAddBasket: this.handleAddBasket,
                  removeBasketItem: this.removeBasketItem,
                  handleEmptyCart: this.handleEmptyCart,
               }}
            >
               {this.props.children}
            </MyContext.Provider>
         </>
      );
   }
}

export { MyContext, MyProvider };
