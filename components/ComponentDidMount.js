import React, { useState } from "react";
import { BsWhatsapp } from "react-icons/bs";
import styles from "../styles/Home.module.css";
import { Box, Button, Container, Flex, Link } from "@chakra-ui/react";

function Navbar() {
  const [navbar, setNavbar] = useState(false);

  // window.addEventListener("scroll", changeBackgroud);
  const changeBackgroud = () => {
    if (window.scrollY > 50) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

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
      className={`styles.navbar ? navbar : null`}
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
      <Box display={"flex"} gap={"5"}>
        <Button
          size="lg"
          bg="#5191FA"
          color={"#fff"}
          variant="solid"
          _hover={{ bg: "blue.500", color: " white" }}
        >
          Book now
        </Button>
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
      </Box>
    </Container>
  );
}

export default Navbar;
