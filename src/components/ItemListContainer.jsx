import React from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import data from "./data.json";

const ItemListContainer = () => {
  const [ceramicas, setCeramicas] = useState([]);
  const { category } = useParams();

  

  const catFilter = ceramicas.filter(
    (ceramica) => ceramica.category === category
  );

  return (
    <div>
      {category ? (
        <ItemList ceramicas={catFilter} />
      ) : (
        <ItemList ceramicas={ceramicas} />
      )}
    </div>
  );
};

export default ItemListContainer;
