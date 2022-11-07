import {
  Box,
  Container,
  Image,
  Text,
  Heading,
  Link,
  Flex,
  Button,
} from "@chakra-ui/react";

import styles from "../styles/card.module.css";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { GoLocation } from "react-icons/go";

function Tourcard({ cards }) {
  const router = useRouter();

  return (
    <Box display={"flex"} gap={"10"} flexWrap={"wrap"}>
      {cards.map((cardItem) => {
        const { id, img, heading, address } = cardItem;

        return (
          <Box
            key={id}
            display={"flex"}
            onClick={() => router.push(`./hotels/${id}`)}
          >
            <Box
              w={"300px"}
              h={"400px"}
              border={"1px solid #D7C7CC"}
              boxShadow={"md"}
              cursor={"pointer"}
              display={"flex"}
              flexDir={"column"}
              gap={"5"}
              borderRadius={"8px"}
            >
              <Box zIndex={"10"}>
                <Image
                  src={img[0]}
                  objectFit={"cover"}
                  h={"250px"}
                  w={"100%"}
                  loading={"lazy"}
                />
              </Box>
              <Box px={"3"} zIndex={"1000"} width={"400px"}>
                <Heading
                  zIndex={"10000"}
                  color={"#06283d"}
                  fontSize={"1rem"}
                  maxWidth={"300px"}
                  wordBreak={"break-word"}
                  fontWeight={"600"}
                >
                  {heading}
                </Heading>
              </Box>

              <Box px={"3"}>
                <Box display={"flex"} gap={"3"}>
                  <GoLocation fontSize={"1.2rem"} />
                  <Text fontSize={".9rem"}> {address}</Text>
                </Box>
              </Box>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
}

export default Tourcard;
