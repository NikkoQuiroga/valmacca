import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import data from "./data.json";

const ItemDetailContainer = () => {
  const [ceramicas, setCeramicas] = useState([]);
  
  useEffect(() => {
    setCeramicas(data);
  }, []);

  return <ItemDetail ceramicas={ceramicas} />;
};

export default ItemDetailContainer;