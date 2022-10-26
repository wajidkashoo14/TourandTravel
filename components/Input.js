import { Button, Container, Box, Select, Heading } from "@chakra-ui/react";
import React from "react";
import styles from "../styles/Home.module.css";

function Input() {
  return (
    <Container
      marginTop={{ base: "-20rem", md: "-30rem", lg: "-25rem" }}
      gap={"8rem"}
      display={"flex"}
      flexDir={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      // opacity={".8"}
    >
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={"5"}
        w={"60vw"}
        borderRadius={"5"}
        height={"5rem"}
        py={"3.5rem"}
        px={"2rem"}
        backgroundColor={"rgba(255,255,255,0.6)"}
        position={"relative"}
      >
        <Select
          placeholder="Where are you going"
          size="lg"
          variant="filled"
          zIndex={"10000"}
        >
          <option value="option1">Gulmarg</option>
          <option value="option2">Pahalgam</option>
          <option value="option3">Sonmarg</option>
        </Select>
        <Select
          placeholder="Tour type"
          size="lg"
          variant="filled"
          zIndex={"10000"}
        >
          <option value="">Adventure Tour</option>
          <option value="option2">City Tour</option>
          <option value="option3">Group Tour</option>
        </Select>

        <Button
          size="lg"
          bg="#5191FA"
          color={"#fff"}
          variant="solid"
          _hover={{ bg: "blue.500", color: " white" }}
          style={{ padding: "1rem 2rem" }}
          // zIndex={"10000"}
        >
          Search
        </Button>
      </Box>
      <Button
        size="lg"
        bg="#5191FA"
        color={"#fff"}
        variant="solid"
        _hover={{ bg: "blue.500", color: " white" }}
        mt={"-5rem"}
      >
        Make an enquiry
      </Button>
    </Container>
  );
}

export default Input;
