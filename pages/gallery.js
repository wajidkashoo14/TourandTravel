import { Container, SimpleGrid, Box } from "@chakra-ui/react";
import React from "react";

function Gallery() {
  return (
    <Container pt={"8rem"}>
      <SimpleGrid
        columns={2}
        spacingX="40px"
        spacingY="20px"
        gap={"10"}
        placeItems={"center"}
      >
        <Box bg="tomato" height="380px" width={"500px"}></Box>
        <Box bg="tomato" height="380px" width={"500px"}></Box>
        <Box bg="tomato" height="80px"></Box>
        <Box bg="tomato" height="80px"></Box>
        <Box bg="tomato" height="80px"></Box>
      </SimpleGrid>
    </Container>
  );
}

export default Gallery;
