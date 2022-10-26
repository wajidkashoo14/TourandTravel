import { Box, Flex, Button, Input, StylesProvider } from "@chakra-ui/react";
import React, { useState } from "react";
import styles from "../styles/modal.module.css";

function Modal({ modalStatus }) {
  return (
    <Box
      className={styles.conatiner}
      //   width={"100vw"}
      //   minH={"100vh"}
      //   position={"fixed"}
      //   display={"flex"}
      //   justifyContent={"center"}
      //   alignItems={"center"}
      //   background={"rgba(0,0,0,0.8)"}
    >
      <Flex
        width={"50rem"}
        height={"60vh"}
        flexDir={"column"}
        position={"relative"}
      >
        <Button
          position={"absolute"}
          top={"5%"}
          left={"5%"}
          onClick={() => modalStatus(false)}
          zIndex={"1000000"}
        >
          X
        </Button>
        <Input placeholder="Name" />
        <Input placeholder="Mobile Number" />
        <Input placeholder="Number of Persons (optional)" />
        <Input placeholder="Number of days (optional)" type={"number"} />
        <Button
          size="lg"
          bg="#5191FA"
          color={"#fff"}
          variant="solid"
          _hover={{ bg: "blue.500", color: " white" }}
          style={{ padding: "1rem 2rem" }}
          textTransform={"uppercase"}
        >
          send now
        </Button>
      </Flex>
    </Box>
  );
}

export default Modal;
