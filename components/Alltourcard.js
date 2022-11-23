import React from "react";
import { Box, Image, Text, Heading, Link } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { AiTwotoneStar } from "react-icons/ai";
import { AiOutlineClockCircle } from "react-icons/ai";

function Alltourcard({ cards }) {
  const router = useRouter();
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      gap={"10"}
      flexWrap={"wrap"}
    >
      {cards.map((card) => {
        const { id, img, heading, headingsecondary } = card;
        return (
          <Box
            display={"flex"}
            onClick={() => router.push(`./tourdetails/${id}`)}
            className="card"
            py={"5rem"}
            // mx={"2rem"}
            key={id}
          >
            <Box
              w={"300px"}
              h={"430px"}
              boxShadow={"md"}
              display={"flex"}
              flexDir={"column"}
              position={"relative"}
              cursor={"pointer"}
            >
              <Box zIndex={"10"}>
                <Image
                  src={img}
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
                  fontSize={"xl"}
                  fontWeight={"600"}
                >
                  {heading}
                </Heading>
              </Box>

              <Box px={"3"}>
                <Box display={"flex"} alignItems={"center"} gap={"3"}>
                  <AiOutlineClockCircle />
                  <Link> {headingsecondary}</Link>
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
        );
      })}
    </Box>
  );
}

export default Alltourcard;
