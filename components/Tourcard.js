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

import { AiTwotoneStar } from "react-icons/ai";
import { AiOutlineClockCircle } from "react-icons/ai";
import styles from "../styles/card.module.css";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";

function Tourcard({ cards }) {
  const router = useRouter();

  // let card = document.querySelector(".card");

  // const nextBtn = () => {
  //   let width = card.clientWidth;
  //   card.scrollLeft = card.scrollLeft + width;
  // };
  // const prevBtn = () => {
  //   let width = card.clientWidth;
  //   card.scrollLeft = card.scrollLeft - width;
  // };

  return (
    <Box
      display={"flex"}
      gap={"10"}
      overflow={"hidden"}
      mx={"5rem"}
      py={"5rem"}
      position={"relative"}
    >
      {cards.map((cardItem) => {
        const { id, heading, headingsecondary, img } = cardItem;

        return (
          <Box
            key={id}
            display={"flex"}
            onClick={() => router.push(`./tourdetails/${id}`)}
            className="card"
          >
            <Box
              w={"300px"}
              h={"430px"}
              boxShadow={"md"}
              display={"flex"}
              flexDir={"column"}
              position={"relative"}
              cursor={"pointer"}
            >
              <Box zIndex={"10"}>
                <Image
                  src={img}
                  objectFit={"cover"}
                  h={"250px"}
                  w={"100%"}
                  loading={"lazy"}
                />
                <Text
                  background={"#ED0925"}
                  color={"#fff"}
                  position={"absolute"}
                  top={"15%"}
                  left={"0%"}
                  px={"2"}
                  py={"1"}
                  borderBottomRightRadius={"3px"}
                  borderTopRightRadius={"3px"}
                >
                  Festive offer
                </Text>
              </Box>
              <Box px={"3"} zIndex={"1000"} py={"5"} width={"400px"}>
                <Heading
                  zIndex={"10000"}
                  color={"#06283d"}
                  fontSize={"xl"}
                  fontWeight={"600"}
                >
                  {heading}
                </Heading>
              </Box>

              <Box px={"3"}>
                <Box display={"flex"} alignItems={"center"} gap={"3"}>
                  <AiOutlineClockCircle />
                  <Link> {headingsecondary}</Link>
                </Box>
                <Box display={"flex"} gap={"2"} alignItems={"center"} mt={"3"}>
                  <AiTwotoneStar color={"#FFDC00"} />
                  <AiTwotoneStar color={"#FFDC00"} />
                  <AiTwotoneStar color={"#FFDC00"} />
                  <AiTwotoneStar color={"#FFDC00"} />
                  <AiTwotoneStar color={"#FFDC00"} />
                  <Text>5 reviews</Text>
                </Box>
                <Box
                  display={"flex"}
                  gap={"1"}
                  alignItems={"center"}
                  mt={"3"}
                ></Box>
              </Box>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
}

export default Tourcard;
