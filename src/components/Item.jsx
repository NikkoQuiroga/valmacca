import {
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Stack,
  Text,
  Divider,
  Button,
  Center,
  Flex
} from "@chakra-ui/react";
import { Link } from "react-router-dom"

const Item = ({ id, name, price, image }) => {
  return (
    <div>
      <div key={id}>
        <Flex>
          <Card maxW="sm">
            <CardBody>
              <Image boxSize={"200px"} src={image}/>
              <Stack mt="6" spacing="3">
                <Heading size="md">{name}</Heading>
                <Text color="blue.600" fontSize="2xl">
                  {price + ".-"}
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <Center className="btn-center">
                <Button variant="solid" colorScheme="blue">
                  <Link to={`/item/${id}`}>Más detalles</Link>
                </Button>
              </Center>
            </CardFooter>
          </Card>
        </Flex>
      </div>
    </div>
  );
};

export default Item;
// import React from "react";
// import {
//   Center,
//   Card,
//   CardBody,
//   Image,
//   Heading,
//   Text,
//   Divider,
//   Stack,
//   CardFooter,
//   Button,
// } from "@chakra-ui/react";
// import { Link } from "react-router-dom";

// const Item = ({id, name, stock, category, image }) => {
//     return (
// <div>
//       <div key={id}>
//         <Center p="1rem">
//           <Card className="card-main">
//             <CardBody>
//               <Image src={image} />
//               <Stack mt="6" spacing="3">
//                 <Heading size="md">{name}</Heading>
//                 <Text color="blue.800" fontSize="l">
//                   Category: {category}
//                 </Text>
//                 <Text color="red.600" fontSize="xl">
//                   Stock: {stock}
//                 </Text>
//               </Stack>
//             </CardBody>
//             <Divider />
//             <CardFooter className="card-footer">
//               <Center className="btn-center">
//                 <Button variant="solid" colorScheme="blue">
//                   <Link to={`/item/${id}`}>Details</Link>
//                 </Button>
//               </Center>
//             </CardFooter>
//           </Card>
//         </Center>
//       </div>
//     </div>
//         )
// };

// export default Item;