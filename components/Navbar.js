import React from "react";
import { BsWhatsapp } from "react-icons/bs";

import { Box, Button, Container, Flex, Link } from "@chakra-ui/react";

function Navbar() {
  return (
    <Container
      maxW="100%"
      backgroundColor={"transparent"}
      height="5rem"
      justifyContent="space-between"
      alignItems={"center"}
      display={"flex"}
      px={"10"}
      position={"fixed"}
      mt={"3rem"}
      zIndex={"2000000"}
    >
      <Box zIndex={"10000"}>
        <Link
          fontSize={"1.4rem"}
          _hover={{ textDecoration: "none" }}
          href="/"
          fontWeight={"600"}
        >
          Redoq Top Floor
        </Link>
      </Box>
      <Box zIndex={"10000"}>
        <Flex gap={"5"} fontWeight={"400"}>
          <Button fontSize={"1.2rem"} backgroundColor={"transparent"}>
            <Link
              _hover={{ textDecoration: "none" }}
              href="/"
              fontWeight={"400"}
            >
              Home
            </Link>
          </Button>
          <Button fontSize={"1.2rem"} backgroundColor={"transparent"}>
            <Link
              _hover={{ textDecoration: "none" }}
              href="#"
              fontWeight={"400"}
            >
              Tours
            </Link>
          </Button>
          <Button fontSize={"1.2rem"} backgroundColor={"transparent"}>
            <Link
              _hover={{ textDecoration: "none" }}
              href="#"
              fontWeight={"400"}
            >
              Hotels
            </Link>
          </Button>
          <Button fontSize={"1.2rem"} backgroundColor={"transparent"}>
            <Link
              _hover={{ textDecoration: "none" }}
              href="#"
              fontWeight={"400"}
            >
              Activities
            </Link>
          </Button>
          <Button fontSize={"1.2rem"} backgroundColor={"transparent"}>
            <Link
              _hover={{ textDecoration: "none" }}
              href="#"
              fontWeight={"400"}
            >
              About Us
            </Link>
          </Button>
          <Button fontSize={"1.2rem"} backgroundColor={"transparent"}>
            <Link
              _hover={{ textDecoration: "none" }}
              href="#"
              fontWeight={"400"}
            >
              Contact Us
            </Link>
          </Button>
        </Flex>
      </Box>
      <Box
        zIndex={"10000"}
        backgroundColor={"#25D366"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={"2"}
        px={"5"}
        py={"3"}
        cursor={"pointer"}
        borderRadius={5}
      >
        <BsWhatsapp fontSize={"1.3rem"} marginLeft={"-1rem"} />
        <Link backgroundColor={"#25D366"} textDecoration={"none"}>
          WhatsApp
        </Link>
      </Box>
    </Container>
  );
}

export default Navbar;
