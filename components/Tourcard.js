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
import React from "react";

function Tourcard({ cards }) {
  const router = useRouter();
  return (
    <Box display={"flex"} gap={"10"}>
      {cards.map((cardItem) => {
        const { id, heading, headingtertiary } = cardItem;

        return (
          <Box
            key={id}
            display={"flex"}
            onClick={() => router.push(`./tourdetails/${id}`)}
          >
            <Box
              w={"350px"}
              minH={"450px"}
              border={"1px solid #D7C7CC"}
              boxShadow={"md"}
              position={"relative"}
              cursor={"pointer"}
            >
              <Box zIndex={"10"}>
                <Image
                  src="parimahal.jpg"
                  objectFit={"cover"}
                  h={"250px"}
                  w={"100%"}
                />
                <Text
                  background={"#ED0925"}
                  color={"#fff"}
                  position={"absolute"}
                  top={"50%"}
                  left={"5%"}
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
                zIndex={"1000"}
                height={"4rem"}
                className={styles.fade}
                width={"400px"}
              >
                <Heading
                  zIndex={"10000"}
                  color={"#06283d"}
                  position={"absolute"}
                  top={"30%"}
                  fontSize={"2xl"}
                  fontWeight={"700"}
                  letterSpacing={".1rem"}
                >
                  {heading}
                </Heading>
              </Box>

              <Box px={"3"}>
                <Box display={"flex"} alignItems={"center"} gap={"3"}>
                  <AiOutlineClockCircle />
                  <Link> {headingtertiary}</Link>
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

                <Link textDecoration={"none"} className={styles.button}>
                  More info
                </Link>
              </Box>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
}

export default Tourcard;
