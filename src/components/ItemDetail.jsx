import {
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Stack,
  Text,
  Divider,
  Center,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ItemCount from "./ItemCount";


const ItemDetail = ({ data }) => {

    const { id } = useParams();

    const dataFilter = data.filter((dato) => dato.id == id);

  return (
    <>
      {dataFilter.map((dato) => (
        <div key={dato.id}>
            <Center>
                <Card maxW="sm">
                <CardBody>
                    <Image boxSize={"200px"} src={dato.image} />
                    <Stack mt="6" spacing="3">
                    <Heading size="md">{dato.name}</Heading>
                    <Text>{dato.description}</Text>
                    <Text color="blue.600" fontSize="2xl">
                        {dato.price + ".-"}
                    </Text>
                    </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                    <Center className="card-footer">
                        <ItemCount
                        stock={dato.stock}
                        id={dato.id}
                        price={dato.price}
                        name={dato.name}
                        />
                    </Center>
                </CardFooter>
                </Card>
            </Center>
        </div>
      ))}
    </>
  );
};

export default ItemDetail;
// import {
//     Center,
//     Card,
//     CardBody,
//     Image,
//     Stack,
//     Heading,
//     Text,
//     CardFooter,
//     Divider,
//   } from "@chakra-ui/react";
//   import { useParams } from "react-router-dom";
//   import ItemCount from "./ItemCount";
//   import { useEffect, useState } from "react";
//   import data from "./data.json";
  
//   const ItemDetail = () => {
//     const { id } = useParams();
//     const [producto, setProducto] = useState([]);
  
//     useEffect(() => {
//       const ceramicaFilter = data.filter((ceramica) => ceramica.id == id);
//       setProducto(ceramicaFilter[0]);
//     }, [id]);
  
//     return (
//       <>
//         <Center p="1rem">
//           <Card className="card-main">
//             <CardBody>
//               <Image borderRadius="lg" src={producto.image} />
//               <Stack mt="6" spacing="3">
//                 <Heading size="md">{producto.name}</Heading>
//                 <Text color="blue.800" fontSize="l">
//                   Description: {producto.description}
//                 </Text>
//                 <Text color="blue.800" fontSize="l">
//                   Category: {producto.category}
//                 </Text>
//                 <Text color="red.600" fontSize="xl">
//                   Stock: {producto.stock}
//                 </Text>
//                 <Text color="green.600" fontSize="xl">
//                   Price: U$D {producto.price}
//                 </Text>
//               </Stack>
//             </CardBody>
//             <Divider />
//             <CardFooter className="card-footer">
//               <ItemCount
//                 stock={producto.stock}
//                 id={producto.id}
//                 price={producto.price}
//                 name={producto.name}
//               />
//             </CardFooter>
//           </Card>
//         </Center>
//       </>
//     );
//   };
  
//   export default ItemDetail;