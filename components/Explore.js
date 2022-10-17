import { Container, Button, Box, Heading } from "@chakra-ui/react";
import React from "react";
import styles from "../styles/explore.module.css";

function Explore() {
  return (
    <Container maxW={"100%"} height={"80vh"} bg={"#fff"} textAlign={"center"}>
      <div className={styles.videodiv}>
        <video src="gulmarg.mp4" muted loop autoPlay className={styles.video}>
          <source src="gulmarg.mp4" type="video/mp4" />
        </video>
        <div className={styles.overlay}></div>
      </div>
    </Container>
  );
}

export default Explore;
