import { Container, SimpleGrid, Box, Image } from "@chakra-ui/react";
import React from "react";

function Gallery() {
  return (
    <Box pt={"8rem"} minH={"100vh"} maxW={"100vw"} margin={"0"}>
      <Image
        src="./gallerybanner.jpg"
        w={"100vw"}
        h={"70vh"}
        objectFit={"cover"}
      />
    </Box>
  );
}

export default Gallery;
