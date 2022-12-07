import React from "react";
import { Box, Button, Container, Flex } from "@chakra-ui/react";
import { TbBrandFacebook } from "react-icons/tb";
import { FiInstagram } from "react-icons/fi";
import { BsTwitter } from "react-icons/bs";
import { useRouter } from "next/router";
function Conatactstrip() {
  const router = useRouter();
  return (
    <Container
      maxW={"100%"}
      p={"2 10"}
      height="3rem"
      backgroundColor={"#1A2B48"}
      color="#fff"
      display={"flex"}
      alignItems={"center"}
      justifyContent="space-between"
      px="3rem"
      py="3"
      zIndex={"10000"}
      position={"fixed"}
      fontFamily={"Montserrat"}
      fontWeight={"400"}
    >
      <Flex maxW="100%" alignItems={"center"} zIndex={"10000"}>
        <Flex gap={"10"} justifyContent="center" alignItems="center">
          <Flex
            alignItems="center"
            gap={"5"}
            borderRight="1px solid #fff"
            paddingRight={"3"}
          >
            <TbBrandFacebook />
            <FiInstagram />
            <BsTwitter />
          </Flex>
          <Box>
            <p>wajidkashoo@gmail.com</p>
          </Box>
        </Flex>
      </Flex>

      <Flex>
        <Flex>
          <Flex
            gap={"5"}
            justifyContent="center"
            alignItems="center"
            fontWeight={"400"}
          >
            <Box>
              <Button color="white" variant="link" fontWeight={"500"}>
                9696103894
              </Button>
            </Box>
            <Box>
              <Button
                color="white"
                style={{ backgroundColor: "transparent" }}
                variant="link"
                fontWeight={"500"}
                onClick={(e) => {
                  router.push("/login");
                }}
              >
                Signin
              </Button>
            </Box>
            <Box>
              <Button
                color="white"
                variant="link"
                fontWeight={"500"}
                onClick={(e) => {
                  router.push("/signup");
                }}
              >
                Signup
              </Button>
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </Container>
  );
}

export default Conatactstrip;
