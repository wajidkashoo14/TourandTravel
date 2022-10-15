import { Box, Button, Container, Heading, Text, Flex } from "@chakra-ui/react";
import { AiOutlineArrowRight } from "react-icons/ai";
import React from "react";
import styles from "../styles/discription.module.css";

function Discription() {
  return (
    <Container
      maxW={"100vw"}
      // height={"100vh"}
      bg={"#fff"}
      mt={"20vh"}
      backgroundColor={"#F7F7F7"}
      py={"10"}
      px={"7rem"}
    >
      <Heading
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
            fontSize={"1.2rem"}
            my={"4"}
            className={styles.heading__secondary}
          >
            YOU'RE GOING TO FALL IN LOVE WITH NATURE
          </Heading>
          <Text maxW={"35rem"} textAlign={"left"} fontWeight={"350"}>
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
          >
            LIVE ADVENTURES LIKE YOU NEVER HAVE BEFORE
          </Heading>
          <Text fontWeight={"350"} maxW={"35rem"}>
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
        <Box
          position={"relative"}
          display={"flex"}
          flexDir={"column"}
          gap={"10"}
          justifyContent={"center"}
        >
          <Box display={"flex"} gap={"8"}>
            <img src="/dallake.jpg" className={styles.imageone} />
            <img src="/gulmarg.jpg" className={styles.imagetwo} />
          </Box>
          <Box display={"flex"} justifyContent={"center"}>
            <img src="/pahalgam.jpg" className={styles.imagethree} />
          </Box>
        </Box>
      </Flex>
    </Container>
  );
}

export default Discription;
