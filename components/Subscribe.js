import { Container, Input, Box, Button, Text } from "@chakra-ui/react";
import React from "react";
import { AiOutlineMessage } from "react-icons/ai";

function Subscribe() {
  return (
    <Container
      maxW={"80%"}
      minH={"25vh"}
      bgGradient="linear(to-r, #0f659a, #06283d)"
      display={"flex"}
      justifyContent={"space-around"}
      alignItems={"center"}
      mx={"10rem"}
      borderRadius={"1rem"}
      my={"6rem"}
      fontFamily={"Montserrat"}
    >
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={"10"}
      >
        <AiOutlineMessage fontSize={"3rem"} color={"#B7C4CF"} />
        <Text fontSize={"1.4rem"} color={"#fff"}>
          Latest offers on Trending Destinations
        </Text>
      </Box>
      <Box display={"flex"} gap={"5"}>
        <Input
          type={"email"}
          placeholder="Your Email"
          size="lg"
          backgroundColor={"#fff"}
        />
        <Button
          size="lg"
          bg="#5191FA"
          color={"#fff"}
          variant="solid"
          _hover={{ bg: "blue.500", color: " white" }}
          style={{ padding: "1rem 2rem" }}
        >
          Subscribe
        </Button>
      </Box>
    </Container>
  );
}

export default Subscribe;
