import { Box, Container, Image, Link, Text, Heading } from "@chakra-ui/react";
import { GoLocation } from "react-icons/go";
import { AiTwotoneStar } from "react-icons/ai";
import { AiOutlineClockCircle } from "react-icons/ai";

import React from "react";

function Tourcard() {
  return (
    <Box w={"350px"} minH={"550px"}>
      <Box position={"relative"} zIndex={"10"}>
        <Image src="parimahal.jpg" objectFit={"cover"} h={"250px"} w={"100%"} />
        <Text
          background={"#ED0925"}
          color={"#fff"}
          position={"absolute"}
          top={"8"}
          left={"0"}
          px={"2"}
          py={"1"}
          borderBottomRightRadius={"3px"}
          borderTopRightRadius={"3px"}
        >
          Featured
        </Text>
      </Box>
      <Box
        px={"2"}
        mt={"-3rem"}
        zIndex={"1000"}
        position={"absolute"}
        backgroundImage="linear(to-b, rgba(255,255,255, 0), rgba(255,255,255, 1) 90%))"
        height={"3rem"}
      >
        <Heading opacity={"1"} zIndex={"100000"} color={"#06283d"}>
          Kashmir
        </Heading>
      </Box>
      <Box>
        <Box>
          <Link> Kashmir 3D 2N Tour</Link>
        </Box>
        <Box display={"flex"} gap={"1"} alignItems={"center"} mt={"3"}>
          <AiTwotoneStar color={"#FFDC00"} />
          <AiTwotoneStar color={"#FFDC00"} />
          <AiTwotoneStar color={"#FFDC00"} />
          <AiTwotoneStar color={"#FFDC00"} />
          <AiTwotoneStar color={"#FFDC00"} />
          <Text>5 reviews</Text>
        </Box>
        <Box display={"flex"} gap={"1"} alignItems={"center"} mt={"3"}>
          <AiOutlineClockCircle />
          <Text>3 days 2 nights</Text>
        </Box>
      </Box>
    </Box>
  );
}

export default Tourcard;
