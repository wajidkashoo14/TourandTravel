import {
  Container,
  Flex,
  Image,
  Box,
  Heading,
  Input,
  Textarea,
  Button,
} from "@chakra-ui/react";
import React from "react";

function contact() {
  return (
    <Container
      bg={"#C8C9C3"}
      maxW={"100vw"}
      py={"10rem"}
      display={"grid"}
      placeItems={"center"}
      paddingBottom={"10rem"}
    >
      <Flex
        bg={"#EDEDEB"}
        w={"80vw"}
        height={"100vh"}
        justifyContent={"center"}
        alignItems={"center"}
        p={"10"}
      >
        <Box>
          <Image
            src="login.jpg"
            minWidth={"40vw"}
            height={"90vh"}
            objectFit={"cover"}
            position={"relative"}
            zIndex={"1"}
          />
        </Box>
        <Box
          w={"500rem"}
          bg={"#fff"}
          height={"75vh"}
          ml={"-5rem"}
          zIndex={"1000"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={"10"}
        >
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={"10"}
            flexDir={"column"}
            width={"80%"}
            border={"1px solid black"}
            p={"5rem 6rem"}
          >
            <Heading>Contact us</Heading>
            <Flex gap={"5"}>
              <Input placeholder="Your Name" type="text" width={"40%"} />
              <Input placeholder="Email" type="email" width={"40%"} />
            </Flex>
            <Textarea />
            <Button width={"100%"}> Send Message</Button>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
}

export default contact;
