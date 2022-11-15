import { Container, Heading, Box } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Tourcard from "./Tourcard";
import styles from "../styles/discription.module.css";
import cards from "./TourData";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";
function Cards() {
  const [tourCards, setTourCards] = useState(cards);
  const [index, setIndex] = useState(2);

  return (
    <Container
      maxW={"100%"}
      minHeight={"100vh"}
      backgroundColor={"#F7F7F7"}
      py={"10"}
      position={"relative"}
    >
      <Heading textAlign={"center"} py={"6rem"} className={styles.heading}>
        Best rated Tours
      </Heading>
      <Box position={"absolute"} left={"3rem"}>
        <AiOutlineArrowLeft />
      </Box>
      <Box position={"absolute"} right={"3rem"}>
        <AiOutlineArrowRight />
      </Box>

      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={"5"}
      >
        <Tourcard cards={tourCards} />
      </Box>
    </Container>
  );
}

export default Cards;
