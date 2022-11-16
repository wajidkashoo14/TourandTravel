import { Container, Image, Box, Text, Heading } from "@chakra-ui/react";
import styles from "../styles/banner.module.css";

import React from "react";

function Banner() {
  return (
    <Container
      maxW={"100%"}
      minHeight={"60vh"}
      backgroundColor={"#F7F7F7"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Box width={"77rem"} height={"20rem"} position={"relative"}>
        <Image
          src="/banner.jpg"
          width={"77rem"}
          height={"20rem"}
          p={"5"}
          border={"1px solid #fff"}
        />
        <Box
          position={"absolute"}
          left={"50%"}
          top={"50%"}
          transform={"translate(-50%,-50%)"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          flexDir={"column"}
          gap={"5"}
          color={"#FFF"}
        >
          <Text fontSize={"1.6rem"}>your guide to</Text>
          <Heading
            textTransform={"uppercase"}
            fontSize={"5xl"}
            fontWeight={"700"}
            letterSpacing={".2rem"}
          >
            the paradise
          </Heading>
          <button className={styles.button}>Discover more</button>
        </Box>
      </Box>
    </Container>
  );
}

export default Banner;
