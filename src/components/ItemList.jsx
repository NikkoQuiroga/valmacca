import { Container, Flex } from "@chakra-ui/react";
import Item from "./Item";


const ItemList = ({consoles}) => {
  return (
    <>
        <Container maxW="container.lg">
          <Flex gap={"5"}>
            {consoles.map((console) => (
              <Item
              key={console.id}
              id={console.id}
              name={console.name}
              price={console.price}
              stock={console.stock}
              category={console.category}
              image={console.image}
              />
              ))}
          </Flex>
        </Container>
    </>    
  );
};

export default ItemList
// import React from "react";
// import Item from "./Item";
// import { Container } from "@chakra-ui/react";

// const ItemList = ({ ceramicas }) => {
//   return (
//     <>
//       <Container className="main-catalogue">
//         {ceramicas?.map((ceramica) => (
//           <Item
//             key={ceramica.id}
//             id={ceramica.id}
//             name={ceramica.name}
//             description={ceramica.description}
//             price={ceramica.price}
//             stock={ceramica.stock}
//             category={ceramica.category}
//             image={ceramica.image}
//           />
//         ))}
//       </Container>{" "}
//     </>
//   );
// };

// export default ItemList;
