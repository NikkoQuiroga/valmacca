import React from "react";
import {
  Flex,
  Box,
  Spacer,
  Container,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Avatar,
  } from "@chakra-ui/react";
  import CartWidget from "./CartWidget";
  import { Link } from "react-router-dom";
  import { ChevronDownIcon } from "@chakra-ui/icons";


const NavBar = () => {
    return (
        <>
 <Container maxW="150rem" bg="blue.100" color="#262626">
        <Flex alignItems="center" gap="2">
        <Link to={"/"}>
          <Avatar
            size="xs"
            src="../public/valmacca-logo2.png"
          />
                        </Link>
          <Box p="10" w="300px" h="100">



          </Box>
          <Spacer />
          <Box>
            <Menu>
              <Link to={"/catalogue"}>
                <MenuButton
                  as={Button}
                  size="lg"
                  variant="outline"
                  colorScheme="blue"
                  m="5"
                >
                  Catalogue
                </MenuButton>
              </Link>
            </Menu>
            <Menu>
              <MenuButton
                as={Button}
                size="lg"
                variant="outline"
                colorScheme="blue"
                rightIcon={<ChevronDownIcon />}
                m="5"
              >
                Categories
              </MenuButton>
              <MenuList className="menu-list">
                <Link to={`/category/${"Tazas"}`}>

                  <MenuItem>Tazas</MenuItem>

                </Link>
                <Link to={`/category/${"Platos"}`}>

                  <MenuItem>Platos</MenuItem>

                </Link>
                <Link to={`/category/${"Bowls"}`}>

                  <MenuItem>Bowls</MenuItem>

                </Link>
              </MenuList>
            </Menu>
          </Box>
          <Spacer />
          <Box p="10" w="300px" h="100">
            <Link to={"/cart"}>
              <CartWidget />
            </Link>
          </Box>
        </Flex>
      </Container>
      </>
    )
};

export default NavBar;