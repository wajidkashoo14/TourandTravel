import { Box, Container, Heading } from "@chakra-ui/react";
import React from "react";
import Categories from "./Categories";

function Tourcategories() {
  return (
    <Container maxW={"100%"} height={"100vh"} bg={"#fff"}>
      <Heading textAlign={"center"} my={"8"}>
        Tour categories
      </Heading>
      <Box
        display={"flex"}
        gap={"10"}
        w={"100%"}
        justifyContent={"center"}
        alignItems={"center"}
        mt={"5rem"}
      >
        <Categories />
        <Categories />
        <Categories />
      </Box>
    </Container>
  );
}

export default Tourcategories;
