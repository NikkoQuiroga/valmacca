import cart from "../assets/shopping-cart.png";
import { Flex } from "@chakra-ui/react"

const CartWidget = ({}) => {
  return (
    <>       
    <Flex>
            <img id="cart" src={cart} alt="" width={50} />
            <p className="cantidad_items">{0}</p>
    </Flex>
    </>
  )
}

export default CartWidget;
// import React from "react";
// import { Button } from "@chakra-ui/react";

// const CartWidget = () => {
    
//     const cart = [];
//     const quantity = cart.reduce((acc, curr) => {
//         return acc + curr.quantity;
//     }, 0);
    
//     return (
//         <>
//          <div className="cart">
//         <Button size="lg" variant="outline" colorScheme="orange">
//           <span className="material-symbols-outlined">shopping_cart</span>
//           <span>{quantity}</span>
//         </Button>
//       </div>
//         </>
//     )
// };

// export default CartWidget;