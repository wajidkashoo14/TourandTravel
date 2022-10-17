import {
  Box,
  Container,
  Image,
  Link,
  Text,
  Heading,
  Flex,
  Button,
} from "@chakra-ui/react";
import { GoLocation } from "react-icons/go";
import { AiTwotoneStar } from "react-icons/ai";
import { AiOutlineClockCircle } from "react-icons/ai";
import styles from "../styles/card.module.css";

import React from "react";

function Tourcard() {
  return (
    <Box
      w={"400px"}
      minH={"580px"}
      border={"1px solid #D7C7CC"}
      boxShadow={"md"}
      position={"relative"}
      cursor={"pointer"}
    >
      <Box position={"relative"} zIndex={"10"}>
        <Image src="parimahal.jpg" objectFit={"cover"} h={"300px"} w={"100%"} />
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
          Festive offer
        </Text>
      </Box>
      <Box
        px={"3"}
        mt={"-4rem"}
        zIndex={"1000"}
        height={"4rem"}
        className={styles.fade}
        width={"400px"}
      >
        <Heading
          opacity={"1"}
          zIndex={"10000"}
          color={"#06283d"}
          position={"absolute"}
          top={"20%"}
          fontSize={"5xl"}
          fontWeight={"700"}
          letterSpacing={".1rem"}
        >
          Kashmir
        </Heading>
      </Box>
      <Flex gap={"5"} py={"3"} px={"3"}>
        <Box
          bg={"#0f659a"}
          px={"3"}
          color={"#fff"}
          py={"1"}
          borderRadius={".2rem"}
          borderStyle={"ridge"}
        >
          <Text>Srinagar</Text>
        </Box>
        <Box
          bg={"#0f659a"}
          px={"2"}
          color={"#fff"}
          py={"1"}
          borderRadius={".2rem"}
        >
          <Text>Pahalgam</Text>
        </Box>
        <Box
          bg={"#0f659a"}
          px={"2"}
          color={"#fff"}
          py={"1"}
          borderRadius={".2rem"}
        >
          <Text>Gulmarg</Text>
        </Box>
        <Box
          bg={"#0f659a"}
          px={"2"}
          color={"#fff"}
          py={"1"}
          borderRadius={".2rem"}
        >
          <Text>Sonmarg</Text>
        </Box>
      </Flex>
      <Box px={"3"}>
        <Box>
          <Link> 3D 2N Tour</Link>
        </Box>
        <Box display={"flex"} gap={"2"} alignItems={"center"} mt={"3"}>
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
        <Box py={"2"}>
          Explore the Kashmir Valley with our best 3-Nights and 4-Days Tour
          Package crafted for you.
        </Box>
        <Link textDecoration={"none"} className={styles.button}>
          More info
        </Link>
      </Box>
    </Box>
  );
}

export default Tourcard;
