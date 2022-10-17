import { Container, Heading, Box } from "@chakra-ui/react";
import React from "react";
import Tourcard from "./Tourcard";

function Cards() {
  return (
    <Container
      maxW={"100%"}
      minHeight={"100vh"}
      backgroundColor={"#F7F7F7"}
      py={"10"}
    >
      <Heading textAlign={"center"} py={"6rem"}>
        Best rated Tours
      </Heading>

      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={"5"}
      >
        <Tourcard />
        <Tourcard />
        <Tourcard />
        {/* <Tourcard /> */}
      </Box>
    </Container>
  );
}

export default Cards;
