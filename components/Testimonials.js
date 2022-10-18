import { Container, Heading, Box } from "@chakra-ui/react";
import React from "react";
import Testimonialcard from "./Testimonialcard";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { BsArrowLeftCircleFill } from "react-icons/bs";

function Testimonials() {
  return (
    <Container
      maxW={"100%"}
      height={"100vh"}
      bg={"#fff"}
      display={"grid"}
      placeItems={"center"}
      position={"relative"}
    >
      <Box position={"absolute"} right={"10%"}>
        <BsArrowRightCircleFill fontSize={"1.8rem"} />
      </Box>
      <Box position={"absolute"} left={"10%"} fontSize={"1.8rem"}>
        <BsArrowLeftCircleFill />
      </Box>
      <Heading>Testimonials</Heading>
      <Box display={"flex"} mt={"-3rem"}>
        <Testimonialcard />
      </Box>
    </Container>
  );
}

export default Testimonials;
