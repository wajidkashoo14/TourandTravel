import { Container, Heading, Box } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Tourcard from "./Tourcard";
import styles from "../styles/discription.module.css";
function Cards() {
  return (
    <Container
      maxW="100vw"
      minHeight={"100vh"}
      backgroundColor={"#F7F7F7"}
      display={"flex"}
      justifyContent={"center"}
      flexDir="column"
    >
      <Heading textAlign={"center"} className={styles.heading}>
        Best rated Tours
      </Heading>

      <Tourcard />
    </Container>
  );
}

export default Cards;
