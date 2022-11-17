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

      <Box
        right={"2%"}
        position={"absolute"}
        height={"100%"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        top={"0"}
        cursor={"pointer"}
      >
        <AiOutlineArrowRight fontSize={"1.5rem"} />
      </Box>
      <Tourcard cards={tourCards} />
    </Container>
  );
}

export default Cards;
