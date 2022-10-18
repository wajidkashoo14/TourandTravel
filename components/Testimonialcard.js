import { Box, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import { FaQuoteRight } from "react-icons/fa";
function Testimonialcard() {
  return (
    <Box
      width={"50rem"}
      p={"8"}
      position={"relative"}
      display={"flex"}
      flexDir={"column"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Box display={"grid"} placeItems={"center"}>
        <Image
          src="me.jpeg"
          boxSize="150px"
          objectFit="cover"
          borderRadius={"50%"}
          filter={"drop-shadow(0 0 0.45rem crimson)"}
        />
        <Text py={"4"} color={"#06283d"} fontWeight={"500"}>
          Wajid Kashoo
        </Text>
      </Box>

      <Box>
        <Text py={"10"} fontWeight={"300"}>
          I had an amazing trip - all thanks to the travel agency. No hurdles at
          all. Everything was managed very smoothly, they had planned it very
          well. They go out of their way to help us out and take utmost care of
          their customers. Best travel agency! I highly recommend them.
        </Text>
      </Box>
      <Box>
        <FaQuoteRight fontSize={"2rem"} color={"#06283d"} />
      </Box>
    </Box>
  );
}

export default Testimonialcard;
