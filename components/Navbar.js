import React from "react";

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
    >
      <Box zIndex={"10000"}>
        <Link fontSize={"1.4rem"} _hover={{ textDecoration: "none" }} href="#">
          Redoq Top Floor
        </Link>
      </Box>
      <Box zIndex={"10000"}>
        <Flex gap={"5"}>
          <Button fontSize={"1.2rem"} backgroundColor={"transparent"}>
            <Link _hover={{ textDecoration: "none" }} href="#">
              Home
            </Link>
          </Button>
          <Button fontSize={"1.2rem"} backgroundColor={"transparent"}>
            <Link _hover={{ textDecoration: "none" }} href="#">
              Tours
            </Link>
          </Button>
          <Button fontSize={"1.2rem"} backgroundColor={"transparent"}>
            <Link _hover={{ textDecoration: "none" }} href="#">
              Hotels
            </Link>
          </Button>
          <Button fontSize={"1.2rem"} backgroundColor={"transparent"}>
            <Link _hover={{ textDecoration: "none" }} href="#">
              Activities
            </Link>
          </Button>
          <Button fontSize={"1.2rem"} backgroundColor={"transparent"}>
            <Link _hover={{ textDecoration: "none" }} href="#">
              About Us
            </Link>
          </Button>
          <Button fontSize={"1.2rem"} backgroundColor={"transparent"}>
            <Link _hover={{ textDecoration: "none" }} href="#">
              Contact Us
            </Link>
          </Button>
        </Flex>
      </Box>
      <Box zIndex={"10000"}>
        <Button backgroundColor={"#25D366"}>WhatsApp</Button>
      </Box>
    </Container>
  );
}

export default Navbar;
