import Data from "../data.json";
import { Heading, Center } from "@chakra-ui/react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const { category } = useParams();

  const catFilter = Data.filter((console) => console.category === category);
  console.log(catFilter);

  return (
    <div>
      <Center h="100px" color="black">
        <Heading as="h2" size="2xl">
        { !category ? <h2>Vajillas</h2> : <h2>{`${category}`}</h2> }
        </Heading>
      </Center>
        {category ? <ItemList consoles={catFilter} /> : <ItemList consoles={Data} /> }
    </div>
  );
};

export default ItemListContainer;
// import React from "react";
// import ItemList from "./ItemList";
// import { useParams } from "react-router-dom";

// const ItemListContainer = () => {
//   const vajilla = [
//     {id: 1, name: "Plato", stock: 1, category: "Platos", image: "https://http2.mlstatic.com/D_NQ_NP_834190-MLA48820696368_012022-O.webp"},
//     {id: 2, name: "Taza", stock: 2, category: "Tazas", image: "https://http2.mlstatic.com/D_NQ_NP_711107-MLA49913018200_052022-O.webp"},
//     {id: 3, name: "Taza Cafe", stock: 1, category: "Tazas", image: "https://http2.mlstatic.com/D_NQ_NP_693431-MLA51800079170_102022-O.webp"},
//     {id: 4, name: "Bowl", stock: 1, category: "Bowls", image: "https://http2.mlstatic.com/D_NQ_NP_851076-MLA52540111151_112022-O.jpg"},
//   ]

// const getVajilla = () => {
//   return new Promise((resolve, reject) => {
//     if (vajilla.lenght === 0) {
//       reject(new Error("No existen productos"));
//     }
//     setTimeout(() => {
//       resolve(vajilla);
//     }, 1000);
// });
// }

// async function fetchingData () {
//   try {
//     const vajillaFetched = await getVajilla();
//     console.log(vajillaFetched);
//   } catch (err) {
//     console.log(er);
//   }
// };

// fetchingData();


//   const ceramicas = vajilla;
//   const { category } = useParams();

//   const catFilter = ceramicas.filter(
//     (ceramica) => ceramica.category === category
//   );

//   return (
//     <div>
//       {category ? ( <ItemList ceramicas={catFilter} />) : (<ItemList ceramicas={ceramicas} />
//       )}
//     </div>
//   );
// };

// export default ItemListContainer;