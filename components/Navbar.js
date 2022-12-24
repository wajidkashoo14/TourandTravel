import React, { useState, useEffect } from "react";
import { BsWhatsapp } from "react-icons/bs";
import styles from "../styles/Home.module.css";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { TbBrandFacebook } from "react-icons/tb";
import { FiInstagram } from "react-icons/fi";
import { BsTwitter } from "react-icons/bs";
import {
  Box,
  Button,
  Container,
  Flex,
  Link,
  IconButton,
} from "@chakra-ui/react";
import { useRouter } from "next/router";

function Navbar() {
  const [navbar, setNavbar] = useState(false);
  const [display, setDisplay] = useState("none");

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
      height="5rem"
      justifyContent="space-between"
      alignItems={"center"}
      display={"flex"}
      px={["3", "3", "10", "10"]}
      position={"fixed"}
      mt={"3rem"}
      zIndex={"20000"}
      bg={"rgba(255,255,255,0.2)"}
      scrollBehavior={"smooth"}
      fontFamily={"Montserrat"}
    >
      <Link
        fontSize={"1.4rem"}
        _hover={{ textDecoration: "none" }}
        onClick={() => {
          router.push("/");
        }}
        href="/"
        fontWeight={"600"}
      >
        Redoq
      </Link>
      <Box
        zIndex={"10000"}
        display={["none", "none", "flex", "flex"]}
        justifyContent={"center"}
        alignItems={"center"}
        gap={"10"}
      >
        <Link
          fontSize={"1.4rem"}
          _hover={{ textDecoration: "none" }}
          onClick={() => {
            router.push("/");
          }}
          href="/"
          fontWeight={"600"}
        >
          Redoq
        </Link>
        <Box zIndex={"10000"}>
          <Flex gap={"3"} fontWeight={"400"}>
            <Button fontSize={"1rem"} backgroundColor={"transparent"}>
              <Link
                _hover={{ textDecoration: "none" }}
                href="#"
                fontWeight={"00"}
                onClick={() => {
                  router.push("/tours");
                }}
              >
                Tours
              </Link>
            </Button>
            <Button fontSize={"1rem"} backgroundColor={"transparent"}>
              <Link
                _hover={{ textDecoration: "none" }}
                fontWeight={"00"}
                onClick={() => {
                  router.push("/hotels");
                }}
              >
                Hotels
              </Link>
            </Button>
            <Button fontSize={"1rem"} backgroundColor={"transparent"}>
              <Link
                _hover={{ textDecoration: "none" }}
                href="#"
                fontWeight={"00"}
                onClick={() => {
                  router.push("/activities");
                }}
              >
                Activities
              </Link>
            </Button>
            <Button fontSize={"1rem"} backgroundColor={"transparent"}>
              <Link
                _hover={{ textDecoration: "none" }}
                fontWeight={"00"}
                onClick={() => {
                  router.push("/aboutus");
                }}
              >
                About Us
              </Link>
            </Button>
            <Button fontSize={"1rem"} backgroundColor={"transparent"}>
              <Link
                _hover={{ textDecoration: "none" }}
                fontWeight={"00"}
                onClick={() => {
                  router.push("/transport");
                }}
              >
                Transport
              </Link>
            </Button>
            <Button fontSize={"1rem"} backgroundColor={"transparent"}>
              <Link
                _hover={{ textDecoration: "none" }}
                fontWeight={"00"}
                onClick={() => {
                  router.push("/contact");
                }}
              >
                Contact Us
              </Link>
            </Button>
          </Flex>
        </Box>
      </Box>
      <Box display={["none", "none", "flex", "flex"]} gap={"5"}>
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
      <IconButton
        aria-label="Open Menu"
        size={"lg"}
        mr={"2"}
        icon={<HamburgerIcon />}
        display={["flex", "flex", "none", "none"]}
        onClick={() => {
          setDisplay("flex");
        }}
      />
      <Flex
        w={"100vw"}
        h={"100vh"}
        position={"fixed"}
        top={"0"}
        left={"0"}
        overflow={"auto"}
        backgroundColor={"#06283d"}
        zIndex={"100000000"}
        justifyContent={"space-between"}
        display={display}
        px={"2"}
        py={"8"}
        color={"white"}
      >
        <Link
          fontSize={"1.4rem"}
          _hover={{ textDecoration: "none" }}
          onClick={() => {
            router.push("/");
          }}
          href="/"
          fontWeight={"600"}
        >
          Redoq
        </Link>
        <Box
          zIndex={"10000000"}
          display={["flex", "flex", "flex", "flex"]}
          flexDir={"column"}
          justifyContent={"center"}
          alignItems={"flex-start"}
          gap={"10"}
          color={"white"}
        >
          <Box zIndex={"10000000"}>
            <Flex
              gap={"3"}
              fontWeight={"400"}
              flexDir={"column"}
              zIndex={"10000000"}
            >
              <Button
                fontSize={"1rem"}
                backgroundColor={"transparent"}
                color={"white"}
              >
                <Link
                  _hover={{ textDecoration: "none" }}
                  href="#"
                  fontWeight={"00"}
                  color={"#fff"}
                  onClick={() => {
                    router.push("/tours");
                  }}
                >
                  Tours
                </Link>
              </Button>
              <Button fontSize={"1rem"} backgroundColor={"transparent"}>
                <Link
                  _hover={{ textDecoration: "none" }}
                  fontWeight={"00"}
                  onClick={() => {
                    router.push("/hotels");
                  }}
                >
                  Hotels
                </Link>
              </Button>
              <Button fontSize={"1rem"} backgroundColor={"transparent"}>
                <Link
                  _hover={{ textDecoration: "none" }}
                  href="#"
                  fontWeight={"00"}
                  onClick={() => {
                    router.push("/activities");
                  }}
                >
                  Activities
                </Link>
              </Button>
              <Button fontSize={"1rem"} backgroundColor={"transparent"}>
                <Link
                  _hover={{ textDecoration: "none" }}
                  fontWeight={"00"}
                  onClick={() => {
                    router.push("/aboutus");
                  }}
                >
                  About Us
                </Link>
              </Button>
              <Button fontSize={"1rem"} backgroundColor={"transparent"}>
                <Link
                  _hover={{ textDecoration: "none" }}
                  fontWeight={"00"}
                  onClick={() => {
                    router.push("/transport");
                  }}
                >
                  Transport
                </Link>
              </Button>
              <Button fontSize={"1rem"} backgroundColor={"transparent"}>
                <Link
                  _hover={{ textDecoration: "none" }}
                  fontWeight={"00"}
                  onClick={() => {
                    router.push("/contact");
                  }}
                >
                  Contact Us
                </Link>
              </Button>
            </Flex>
          </Box>
        </Box>
        <IconButton
          aria-label="Open Menu"
          size={"md"}
          color={"#06283d"}
          mr={"2"}
          icon={<CloseIcon />}
          display={["flex", "flex", "none", "none"]}
          onClick={() => {
            setDisplay("none");
          }}
        />
        <Box gap={"10"} position={"absolute"} bottom={"10%"}>
          <Flex
            alignItems="center"
            gap={"5"}
            borderRight="1px solid #fff"
            paddingRight={"3"}
          >
            <TbBrandFacebook fontSize={"1.5rem"} />
            <FiInstagram fontSize={"1.5rem"} />
            <BsTwitter fontSize={"1.5rem"} />
          </Flex>
          <Box display={{ base: "none", md: "none", lg: "block" }}>
            <p>wajidkashoo@gmail.com</p>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
}

export default Navbar;
