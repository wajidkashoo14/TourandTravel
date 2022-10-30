import { Box, Container, Heading } from "@chakra-ui/react";
import React from "react";
import Categories from "./Categories";
import styles from "../styles/discription.module.css";

function Tourcategories() {
  return (
    <Container maxW={"100%"} backgroundColor={"#F7F7F7"} py={"8rem"}>
      <Heading textAlign={"center"} my={"8"} className={styles.heading}>
        Tour categories
      </Heading>
      <Box
        display={"flex"}
        gap={"10"}
        flexWrap={"wrap"}
        w={"100%"}
        justifyContent={"center"}
        alignItems={"center"}
        mt={"5rem"}
      >
        <Categories />
        <Categories />
        <Categories />
        <Categories />
        <Categories />
        <Categories />
      </Box>
    </Container>
  );
}

export default Tourcategories;
