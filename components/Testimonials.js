import { Container, Heading, Box } from "@chakra-ui/react";
import React, { useState } from "react";
import Testimonialcard from "./Testimonialcard";
import { BsArrowRightCircleFill, BsPeople } from "react-icons/bs";
import { BsArrowLeftCircleFill } from "react-icons/bs";
import data from "./Testmomialdata";
import styles from "../styles/discription.module.css";

function Testimonials() {
  const [index, setIndex] = useState(0);
  const { name, img, text } = data[index];

  const checkLength = (index) => {
    if (index > data.length - 1) {
      return 0;
    }
    if (index < 0) {
      return data.length - 1;
    }
    return index;
  };

  const prev = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkLength(newIndex);
    });
  };
  const next = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkLength(newIndex);
    });
  };
  return (
    <Container
      maxW={"100%"}
      height={"100vh"}
      bg={"#fff"}
      display={"grid"}
      placeItems={"center"}
      position={"relative"}
    >
      <Box position={"absolute"} right={"10%"} color={"#06283d"}>
        <BsArrowRightCircleFill
          fontSize={"1.8rem"}
          cursor={"pointer"}
          color={"#06283d"}
          onClick={next}
        />
      </Box>
      <Box position={"absolute"} left={"10%"} fontSize={"1.8rem"}>
        <BsArrowLeftCircleFill
          cursor={"pointer"}
          color={"#06283d"}
          onClick={prev}
        />
      </Box>
      <Heading className={styles.heading}>Testimonials</Heading>
      <Box display={"flex"} mt={"-3rem"}>
        <Testimonialcard img={img} name={name} text={text} />
      </Box>
    </Container>
  );
}

export default Testimonials;
