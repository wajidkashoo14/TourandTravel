import React, { useState, useEffect } from "react";
import { BsWhatsapp } from "react-icons/bs";
import styles from "../styles/Home.module.css";
import { Box, Button, Container, Flex, Link } from "@chakra-ui/react";
import { useRouter } from "next/router";

function Navbar() {
  const [navbar, setNavbar] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", changeBackgroud);
  }, []);

  const changeBackgroud = () => {
    if (window.scrollY > 50) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  const router = useRouter();

  return (
    <Container
      maxW="100%"
      backgroundColor={styles.navbar ? "navbar" : "transparent"}
      height="5rem"
      justifyContent="space-between"
      alignItems={"center"}
      display={"flex"}
      px={"10"}
      position={"fixed"}
      mt={"3rem"}
      zIndex={"20000"}
      bg={"#69E1B1"}
      scrollBehavior={"smooth"}
    >
      <Box zIndex={"10000"}>
        <Link
          fontSize={"1.4rem"}
          _hover={{ textDecoration: "none" }}
          onClick={() => {
            router.push("/");
          }}
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
              onClick={() => {
                router.push("/tours");
              }}
            >
              Tours
            </Link>
          </Button>
          <Button backgroundColor={"transparent"}>
            <Link
              _hover={{ textDecoration: "none" }}
              href="#"
              fontWeight={"400"}
              onClick={() => {
                router.push("/hotels");
              }}
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
              fontWeight={"400"}
              onClick={() => {
                router.push("/aboutus");
              }}
            >
              About Us
            </Link>
          </Button>
          <Button fontSize={"1.2rem"} backgroundColor={"transparent"}>
            <Link
              _hover={{ textDecoration: "none" }}
              fontWeight={"400"}
              onClick={() => {
                router.push("/contact");
              }}
            >
              Contact Us
            </Link>
          </Button>
        </Flex>
      </Box>
      <Box display={"flex"} gap={"5"}>
        <Link
          className={styles.link}
          size="lg"
          bg="#5191FA"
          color={"#fff"}
          variant="solid"
          _hover={{ bg: "blue.500", color: " white" }}
          href={"#contact"}
        >
          Book now
        </Link>

        <Box
          zIndex={"1000"}
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
          <BsWhatsapp fontSize={"1.3rem"} marginLeft={"-1rem"} color={"#fff"} />
          <Link
            className={styles.whatsapp}
            href={"https://wa.me/919906191921"}
            color={"#fff"}
          >
            WhatsApp
          </Link>
        </Box>
      </Box>
    </Container>
  );
}

export default Navbar;
