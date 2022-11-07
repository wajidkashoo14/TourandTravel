import {
  Box,
  Container,
  Image,
  Flex,
  Heading,
  Text,
  ListItem,
  Button,
  FormControl,
  Input,
  List,
  UnorderedList,
} from "@chakra-ui/react";
import React, { useState } from "react";
import styles from "../styles/aboutus.module.css";
import cards from "../components/Hoteldata";
import Hotelcard from "../components/Hotelcard";

function Hotels() {
  const [hotelCards, sethotelCards] = useState(cards);
  return (
    <Box
      pt={"8rem"}
      maxWidth={"100vw"}
      minH={"100vh"}
      fontFamily={("Montserrat", "sans-serif")}
      pb={"8rem"}
    >
      <Flex width={"100%"} flexDir={"column"}>
        <Box maxWidth={"100vw"} height={"40vh"}>
          <Image
            src="./home.jpg"
            width={"100%"}
            height={"35vh"}
            objectFit={"cover"}
            backgroundPosition={"center"}
          />
        </Box>
      </Flex>

      <Box
        mx={"10"}
        display={"flex"}
        flexWrap={"wrap"}
        minH={"100vh"}
        gap={"10"}
        maxW={"100vw"}
      >
        <Flex
          width={"20%"}
          height={"350px"}
          borderRadius={"5"}
          boxShadow={"lg"}
        >
          <FormControl
            display={"flex"}
            flexDir={"column"}
            gap={"5"}
            p={"5"}
            border={"1px solid #cacfd0"}
          >
            <Heading
              className={styles.heading}
              fontSize={"lg"}
              textAlign={"center"}
            >
              Search Hotels
            </Heading>
            <Input
              type="text"
              placeholder="Where are you going ?"
              fontSize={"1rem"}
              size="lg"
              variant="flushed"
            />
            <Input
              type="date"
              placeholder="From-To"
              size="lg"
              variant="flushed"
            />
            <Input type="date" placeholder="To" size="lg" variant="flushed" />
            <Button
              size="lg"
              bg="#5191FA"
              color={"#fff"}
              variant="solid"
              _hover={{ bg: "blue.500", color: " white" }}
            >
              Search
            </Button>
          </FormControl>
        </Flex>
        <Flex maxWidth={"70vw"} flexWrap={"wrap"}>
          <Text fontSize={"3xl"} fontWeight={"500"} mb={"5"}>
            {`${hotelCards.length} Hotels found`}
          </Text>
          <Hotelcard cards={hotelCards} display={"flex"} flexWrap={"wrap"} />
        </Flex>
      </Box>
    </Box>
  );
}

export default Hotels;
