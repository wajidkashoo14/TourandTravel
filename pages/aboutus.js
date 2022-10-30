import { Box, Container, Image, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import styles from "../styles/aboutus.module.css";

function aboutus() {
  return (
    <Box pt={"8rem"} maxWidth={"100vw"} minH={"100vh"}>
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
        <Box p={"8"} display={"flex"} flexDir={"column"} gap={"2"}>
          <Heading
            fontSize={"3xl"}
            fontWeight={"500"}
            className={styles.heading}
            py={"3"}
          >
            About us
          </Heading>
          <Text>MULTI DESTINATIONS believes in making Travelling Simpler.</Text>
          <Text>How, You may Wonder?</Text>
          <Text>
            We understand that different travellers come with different
            expectations and tastes, & we are forthright in acknowledging that.
          </Text>
          <Text></Text>
          <Text>
            Therefore, our Tour Advisors encourage brief conversations with our
            customers before booking with us so that we may help travellers
            Handcraft Tour Packages that are just “right for them”.
          </Text>
        </Box>
      </Flex>
    </Box>
  );
}

export default aboutus;
