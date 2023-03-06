import React from "react";
import Item from "./Item";
import { Container } from "@chakra-ui/react";

const ItemList = ({ ceramicas }) => {
  return (
    <>
      <Container className="main-catalogue">
        {ceramicas?.map((ceramica) => (
          <Item
            key={ceramica.id}
            id={ceramica.id}
            name={ceramica.name}
            description={ceramica.description}
            price={ceramica.price}
            stock={ceramica.stock}
            category={ceramica.category}
            image={ceramica.image}
          />
        ))}
      </Container>{" "}
    </>
  );
};

export default ItemList;
