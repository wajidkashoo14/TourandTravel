import React, { useState, useEffect } from "react";
import { BsWhatsapp } from "react-icons/bs";
import styles from "../styles/Home.module.css";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { TbBrandFacebook } from "react-icons/tb";
import { FiInstagram } from "react-icons/fi";
import { BsTwitter } from "react-icons/bs";
import { useRouter } from "next/router";
import {
  Box,
  Button,
  Container,
  Flex,
  IconButton,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
function Navbar() {
  const [navbar, setNavbar] = useState("rgba(255,255,255,0.2)");
  const [display, setDisplay] = useState("none");
  useEffect(() => {
    window.addEventListener("scroll", changeBackgroud);
  }, []);
  const changeBackgroud = () => {
    if (window.scrollY > 50) {
      setNavbar("#83B0FB");
    } else {
      setNavbar("rgba(255,255,255,0.2)");
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
      px={["0", "3", "10", "10"]}
      position={"fixed"}
      mt={"3rem"}
      zIndex={"20000"}
      style={{ background: `${navbar}`, transition: "all 0.5s" }}
      scrollBehavior={"smooth"}
      fontFamily={"Montserrat"}
    >
      <Link href="/">
        <a className={styles.link}>Syed Travels</a>
      </Link>
      <Box
        zIndex={"10000"}
        display={["none", "none", "flex", "flex"]}
        justifyContent={"center"}
        alignItems={"center"}
        gap={"10"}
      >
        <Box zIndex={"10000"}>
          <Flex gap={"3"} fontWeight={"400"}>
            <Button fontSize={"1rem"} backgroundColor={"transparent"}>
              <Link _hover={{ textDecoration: "none" }} href="/tours">
                <a>Tours</a>
              </Link>
            </Button>
            <Button fontSize={"1rem"} backgroundColor={"transparent"}>
              <Link _hover={{ textDecoration: "none" }} href="/hotels">
                <a>Hotels</a>
              </Link>
            </Button>
            <Button fontSize={"1rem"} backgroundColor={"transparent"}>
              <Link _hover={{ textDecoration: "none" }} href="/activities">
                <a>Activities</a>
              </Link>
            </Button>
            <Button fontSize={"1rem"} backgroundColor={"transparent"}>
              <Link _hover={{ textDecoration: "none" }} href="/aboutus">
                <a>Aboutus</a>
              </Link>
            </Button>
            <Button fontSize={"1rem"} backgroundColor={"transparent"}>
              <Link _hover={{ textDecoration: "none" }} href="/transport">
                <a>Transport</a>
              </Link>
            </Button>
            <Button fontSize={"1rem"} backgroundColor={"transparent"}>
              <Link _hover={{ textDecoration: "none" }} href="/contact">
                <a>Contact us</a>
              </Link>
            </Button>
          </Flex>
        </Box>
      </Box>
      <Box display={["none", "none", "flex", "flex"]} gap={"5"}>
        {router.pathname === "/" && (
          <Button
            size="lg"
            bg="#5191FA"
            color={"#fff"}
            variant="solid"
            _hover={{ bg: "blue.500", color: " white" }}
          >
            <Link className={styles.link} href="#contact">
              <a>Book now</a>
            </Link>
          </Button>
        )}
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
          color={"#fff"}
        >
          <BsWhatsapp fontSize={"1.3rem"} color={"#fff"} />
          <Link
            className={styles.whatsapp}
            href="https://wa.me/919906191921"
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
        py={"10"}
        color={"white"}
      >
        <Link
          fontSize={"1.4rem"}
          _hover={{ textDecoration: "none" }}
          href="/"
          fontWeight={"600"}
        >
          <Text>Syed Travels</Text>
        </Link>
        <Box
          zIndex={"10000000"}
          display={"flex"}
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
                  href="/tours"
                  fontWeight={"00"}
                  color={"#fff"}
                >
                  <a
                    onClick={() => {
                      setDisplay("none");
                    }}
                  >
                    Tours
                  </a>
                </Link>
              </Button>
              <Button fontSize={"1rem"} backgroundColor={"transparent"}>
                <Link
                  _hover={{ textDecoration: "none" }}
                  fontWeight={"00"}
                  href="/hotels"
                >
                  <a
                    onClick={() => {
                      setDisplay("none");
                    }}
                  >
                    Hotels
                  </a>
                </Link>
              </Button>
              <Button fontSize={"1rem"} backgroundColor={"transparent"}>
                <Link _hover={{ textDecoration: "none" }} href="/activities">
                  <a
                    onClick={() => {
                      setDisplay("none");
                    }}
                  >
                    Activities
                  </a>
                </Link>
              </Button>
              <Button fontSize={"1rem"} backgroundColor={"transparent"}>
                <Link _hover={{ textDecoration: "none" }} href="/aboutus">
                  <a
                    onClick={() => {
                      setDisplay("none");
                    }}
                  >
                    About Us
                  </a>
                </Link>
              </Button>
              <Button fontSize={"1rem"} backgroundColor={"transparent"}>
                <Link
                  _hover={{ textDecoration: "none" }}
                  fontWeight={"00"}
                  href="/transport"
                >
                  <a
                    onClick={() => {
                      setDisplay("none");
                    }}
                  >
                    Transport
                  </a>
                </Link>
              </Button>
              <Button fontSize={"1rem"} backgroundColor={"transparent"}>
                <Link
                  _hover={{ textDecoration: "none" }}
                  fontWeight={"00"}
                  href="/contactus"
                >
                  <a
                    onClick={() => {
                      setDisplay("none");
                    }}
                  >
                    Contact us
                  </a>
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
