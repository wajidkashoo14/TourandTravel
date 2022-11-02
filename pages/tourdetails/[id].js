import { Box, Heading, Image } from "@chakra-ui/react";
import React from "react";
import { useRouter } from "next/router";

function Tourdetails() {
  const router = useRouter();
  const id = router.query.id;
  console.log(id);

  return (
    <Box maxW={"100vw"} pt={"8rem"} minH={"100vh"}>
      <Box w={"100vw"} h={"100vh"}>
        <Image
          src="./home.jpg"
          width={"100%"}
          height={"100vh"}
          objectFit={"cover"}
        />
        <Heading fontSize={"3xl"}>{heading}r</Heading>
      </Box>
    </Box>
  );
}

export default Tourdetails;
