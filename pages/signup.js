import { Container, Image, Box } from "@chakra-ui/react";
import React from "react";

function signup() {
  return (
    <Container
      minHeight={"100vh"}
      minW={"100vw"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Box position={"relative"}>
        <Image
          src="signup.jpg"
          minWidth={"80vw"}
          height={"75vh"}
          objectFit={"cover"}
          position={"relative"}
          zIndex={"-1"}
        />
        <Box
          position={"absolute"}
          bg={"rgba(255,255,255,0.8)"}
          top={"0"}
          left={"0"}
          width={"800px"}
          height={"100%"}
          zIndex={"1000"}
          clipPath={"polygon(0 0, 100% 0, 64% 100%, 0% 100%)"}
        ></Box>
      </Box>
    </Container>
  );
}

export default signup;
