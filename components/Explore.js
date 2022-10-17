import { Container, Button, Box, Heading } from "@chakra-ui/react";
import React from "react";
import styles from "../styles/explore.module.css";
import Explorecard from "./Explorecard";

function Explore() {
  return (
    <Box
      maxW={"100%"}
      height={"100vh"}
      bg={"#fff"}
      textAlign={"center"}
      overflow={"hidden"}
    >
      <div className={styles.videodiv}>
        <video src="gulmarg.mp4" muted loop autoPlay className={styles.video}>
          <source src="gulmarg.mp4" type="video/mp4" />
        </video>
        <div className={styles.overlay}></div>
        <Box className={styles.cardbox} display={"flex"} gap={"8rem"}>
          <Explorecard />
          <Explorecard />
          <Explorecard />
        </Box>
      </div>
    </Box>
  );
}

export default Explore;
