import { Box, Container, Heading } from "@chakra-ui/react";
import React from "react";
import Categories from "./Categories";
import styles from "../styles/discription.module.css";

function Tourcategories() {
  return (
    <Container
      maxW={"100%"}
      height={"100vh"}
      backgroundColor={"#F7F7F7"}
      py={"10"}
    >
      <Heading textAlign={"center"} my={"8"} className={styles.heading}>
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
