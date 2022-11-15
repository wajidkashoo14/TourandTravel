import { Box, Button, Container, Heading, Text, Flex } from "@chakra-ui/react";
import { AiOutlineArrowRight } from "react-icons/ai";
import React from "react";
import styles from "../styles/discription.module.css";

function Discription() {
  return (
    <Container
      maxW={"100vw"}
      mt={"40vh"}
      backgroundColor={"#F7F7F7"}
      py={"8rem"}
      px={"7rem"}
    >
      <Heading
        maxW={"100%"}
        className={styles.heading}
        textAlign={"center"}
        fontSize={"2.2rem"}
        my={"6rem"}
      >
        EXCITING TOURS FOR ADVENTUROUS PEOPLE
      </Heading>
      <Flex mt={"5rem"} gap={"5rem"} position={"relative"}>
        <Box>
          <Heading
            maxW={"100%"}
            fontSize={"1.2rem"}
            my={"4"}
            className={styles.heading__secondary}
            textAlign={"center"}
          >
            {`YOU'RE GOING TO FALL IN LOVE WITH NATURE`}
          </Heading>
          <Text
            maxW={"100%"}
            textAlign={"center"}
            fontWeight={"400"}
            mx={"6rem"}
            lineHeight={"1.6rem"}
          >
            {` The Union Territory of Jammu and Kashmir is a great tourist
            destination. Picturesque and enchanting, Kashmir is cradled high in
            the lofty green Himalayas and hailed all over the world for its
            incredible natural beauty. Surrounded by mountain peaks, lush green
            valleys, glistening lakes, temples and spectacular Mughal-era
            gardens, it has inspired poets through centuries. Kashmir is
            crisscrossed by chinar tree-lined roads and quaint wooden bridges;
            and is home to bustling bazaars, sufi shrines and forts. Add to
            this, the charms of flavourful Kashmiri cuisine and apples and
            walnuts from the lush orchards surrounding it.`}
          </Text>
          <Heading
            className={styles.heading__secondary}
            fontSize={"1.2rem"}
            my={"7"}
            textAlign={"center"}
          >
            LIVE ADVENTURES LIKE YOU NEVER HAVE BEFORE
          </Heading>
          <Text
            fontWeight={"400"}
            maxW={"100%"}
            mx={"20rem"}
            textAlign={"center"}
            lineHeight={"1.6rem"}
          >
            {` In winter, Kashmir takes on a white glow, covered in soft snow and
            skiers making a beeline for its famous slopes. And in summer, as the
            snow melts, and the flowers in the meadows bloom, it resembles an
            artist's canvas.`}
          </Text>

          <button className={styles.button}>
            <Flex justifyContent={"center"} alignItems={"center"} gap={"1"}>
              Learn more <AiOutlineArrowRight />
            </Flex>
          </button>
        </Box>
      </Flex>
    </Container>
  );
}

export default Discription;
