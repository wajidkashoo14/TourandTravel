import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { GiValley } from "react-icons/gi";

function Explorecard() {
  return (
    <Box
      width={"250px"}
      height={"300px"}
      bgGradient="linear(to-r, #43cea2, #185a9d,)"
      p={"5"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      flexDir={"column"}
      gap={"5"}
    >
      <GiValley fontSize={"3rem"} />
      <Heading>Explore the valley</Heading>
      <Text>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem,
        libero?
      </Text>
    </Box>
  );
}

export default Explorecard;
