import { Container, Heading, Box } from "@chakra-ui/react";
import React, { useState } from "react";
import Tourcard from "./Tourcard";
import styles from "../styles/discription.module.css";
import cards from "./TourData";
function Cards() {
  const [tourCards, setTourCards] = useState(cards);
  const [index, setIndex] = useState();
  return (
    <Container
      maxW={"100%"}
      minHeight={"100vh"}
      backgroundColor={"#F7F7F7"}
      py={"10"}
    >
      <Heading textAlign={"center"} py={"6rem"} className={styles.heading}>
        Best rated Tours
      </Heading>

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
