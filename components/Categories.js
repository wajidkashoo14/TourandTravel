import { Box, Button, Image, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { GoLocation } from "react-icons/go";
import { AiOutlineHeart } from "react-icons/ai";

function Categories() {
  return (
    <Box
      position={"relative"}
      borderRadius={"8px"}
      cursor={"pointer"}
      overflow={"hidden"}
      transition={"all 0.2s"}
      minH={"350px"}
      width={"380px"}
    >
      <Image
        src="valley.jpg"
        objectFit={"cover"}
        h={{ base: "100%", md: "350px", lg: "350px" }}
      />
      <Heading
        position={"absolute"}
        top={"10%"}
        left={"5%"}
        fontSize={"xl"}
        color={"#fff"}
        fontWeight={"500"}
      >
        Kashmir Tour Packages
      </Heading>
      <Box position={"absolute"} top={"10%"} right={"5%"}>
        <AiOutlineHeart fontSize={"1.5rem"} color={"#fff"} />
      </Box>
      <Box
        position={"absolute"}
        bottom={"10%"}
        left={"5%"}
        display={"flex"}
        gap={"3"}
      >
        <GoLocation fontSize={"1.5rem"} color={"#fff"} />
        <Text color={"#fff"} fontSize={"1.3rem"}>
          Kashmir
        </Text>
      </Box>
    </Box>
  );
}

export default Categories;
