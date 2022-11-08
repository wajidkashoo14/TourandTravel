import { Button, Container, Box, Image, Heading, Link } from "@chakra-ui/react";
import React from "react";

function Transportcard({ name, img }) {
  return (
    <Box display={"flex"}>
      <Box
        maxW={"300px"}
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
            src={img}
            objectFit={"cover"}
            h={"250px"}
            w={"100%"}
            loading={"lazy"}
            backgroundPosition={"center center"}
            backgroundSize={"cover"}
            backgroundRepeat={"no-repeat"}
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
            {name}
          </Heading>
        </Box>

        <Box px={"3"}>
          <Button
            display={"flex"}
            gap={"3"}
            size="md"
            fontSize={"1.5rem"}
            bg="#5191FA"
            color={"#fff"}
            variant="solid"
            _hover={{ bg: "blue.500", color: " white" }}
          >
            <Link fontSize={"1.2rem"}>Enquire </Link>
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Transportcard;
