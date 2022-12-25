import { Container, Box, Image, Text, Heading, Link } from "@chakra-ui/react";
import React from "react";
import { useRouter } from "next/router";
import { AiTwotoneStar } from "react-icons/ai";
import { AiOutlineClockCircle } from "react-icons/ai";

function toursearch() {
  // const router = useRouter();
  // const data = router.query;
  // // const {filteredData} = data

  // console.log(data);

  return (
    <Container
      pt={"9rem"}
      min-height={"100vh"}
      w={["100vw", "95vw", "100vw"]}
      display={["block", "block", "flex"]}
      justifyContent={"center"}
      alignContent={"center"}
      backgroundColor={"#F7F7F7"}
      overflowX={"hidden"}
    >
      {/* {
        <Box
          display={["block", "block", "flex"]}
          onClick={() => router.push(`./tourdetails/${id}`)}
          key={data.id}
          fontFamily={"Montserrat"}
          px={["1", "1", "0"]}
          overflowX={"hidden"}
        >
          <Box
            w={["100vw", "100vw", "300px"]}
            h={"430px"}
            boxShadow={"md"}
            display={"flex"}
            flexDir={"column"}
            position={"relative"}
            cursor={"pointer"}
            _hover={{
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
              transition: "all 0.3s",
            }}
            fontFamily={"Montserrat"}
          >
            <Box zIndex={"10"}>
              <Image
                src={data.img}
                objectFit={"cover"}
                h={"250px"}
                w={"100%"}
                loading={"lazy"}
              />
              <Text
                background={"#ED0925"}
                color={"#fff"}
                position={"absolute"}
                top={"15%"}
                left={"0%"}
                px={"2"}
                py={"1"}
                borderBottomRightRadius={"3px"}
                borderTopRightRadius={"3px"}
              >
                Festive offer
              </Text>
            </Box>
            <Box px={"3"} zIndex={"1000"} py={"5"} width={"400px"}>
              <Heading
                zIndex={"10000"}
                color={"#06283d"}
                fontSize={"lg"}
                fontWeight={"600"}
                width={"300px"}
              >
                {data.heading}
              </Heading>
            </Box>

            <Box px={"3"}>
              <Box display={"flex"} alignItems={"center"} gap={"3"}>
                <AiOutlineClockCircle />
                <Link> {data.headingsecondary}</Link>
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
            </Box>
          </Box>
        </Box>
      } */}
    </Container>
  );
}

export default toursearch;
