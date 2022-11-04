import Navbar from "./components/navbar/Navbar";
import DogCards from "./components/DogCards";
import Basket from "./components/Basket";
import { useContext } from "react";
import { MyContext } from "./context";

const App = () => {
   const context = useContext(MyContext);

   return (
      <>
         <Navbar
            onClick={context.handleBasketClick}
            basketCount={context.state.basketCount}
         />
         <DogCards handleAddBasket={context.handleAddBasket} />

         <Basket
            onClick={context.handleBasketClick}
            basketItems={context.state.basketItems}
            basketCount={context.state.basketCount}
         />
      </>
   );
};

export default App;
