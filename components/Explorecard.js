import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { GiValley } from "react-icons/gi";

function Explorecard() {
  return (
    <Box
      width={"250px"}
      height={"300px"}
      background={"#06283d"}
      p={"5"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      flexDir={"column"}
      gap={"5"}
      color={"#fff"}
    >
      <GiValley fontSize={"3rem"} />
      <Heading fontSize={"2xl"}>Explore the valley</Heading>
      <Text>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem,
        libero?
      </Text>
    </Box>
  );
}

export default Explorecard;
