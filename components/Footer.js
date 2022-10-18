import { Container, Flex, Heading, Link, Text, Box } from "@chakra-ui/react";
import React from "react";
import { GrFacebook } from "react-icons/gr";
import { SiInstagram } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";

function Footer() {
  return (
    <Container
      maxW={"100%"}
      bg={"#06283d"}
      display={"flex"}
      flexDir={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      color={"#fff"}
      py={"6"}
    >
      <Box
        width={"80%"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={"10rem"}
        py={"2rem"}
        borderBottom={"1px solid #986D7B"}
        height={"60vh"}
      >
        <Flex flexDir={"column"} maxW={"350px"}>
          <Heading
            textTransform={"uppercase"}
            fontSize={"1.2rem"}
            py={"1.5rem"}
            borderBottom={"2px solid #E5E5E5"}
            width={"100%"}
            mb={"1.5rem"}
            textAlign={"center"}
          >
            About us
          </Heading>
          <Box>
            <Text fontSize={".9rem"} fontWeight={"300"} textAlign={"left"}>
              We understand that different travelers come with different
              expectations and tastes, & we are forthright in acknowledging
              that. Therefore, our Tour Advisors encourage brief conversations
              with our customers before booking with us so that we may help
              travelers Handcraft Tour Packages that are just “right for them”.
            </Text>
            <Text fontSize={".9rem"}>
              <Link color={"#2378C0"}>Read more</Link> to know what makes Multi
              Destinations so Unique.
            </Text>
          </Box>
        </Flex>

        <Flex
          flexDir={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Heading
            textTransform={"uppercase"}
            fontSize={"1.2rem"}
            py={"1.5rem"}
            borderBottom={"2px solid #E5E5E5"}
            width={"150px"}
            mb={"1.5rem"}
          >
            quick links
          </Heading>
          <Flex gap={"4"} flexDir={"column"}>
            <Link>Tours</Link>
            <Link>Hotels</Link>
            <Link>Transport</Link>
            <Link>Activities</Link>
            <Link>Blogs</Link>
          </Flex>
        </Flex>
        <Flex flexDir={"column"}>
          <Heading
            textTransform={"uppercase"}
            fontSize={"1.2rem"}
            py={"1.5rem"}
            borderBottom={"2px solid #E5E5E5"}
            width={"100%"}
            mb={".8rem"}
            textAlign={"center"}
          >
            Contact
          </Heading>
          <Flex flexDir={"column"} gap={"4"}>
            <Box px={"4"}>
              <Text>call us</Text>
              <Text color={"#5191FA"}>+91-9596103894</Text>
              <Text color={"#5191FA"}>+91-9596103894</Text>
            </Box>
            <Box px={"5"}>
              <Text>Email us</Text>
              <Text color={"#5191FA"}>Wkashoo@gmail.com</Text>
            </Box>
            <Box gap={"6"} px={"5"}>
              <Text py={"2"}>Follow us</Text>
              <Box display={"flex"} gap={"6"} fontSize={"1.2rem"}>
                <Link>
                  <GrFacebook />
                </Link>
                <Link>
                  <SiInstagram />
                </Link>
                <Link>
                  <BsYoutube />
                </Link>
              </Box>
            </Box>
          </Flex>
        </Flex>
      </Box>
      <Text color={"#fff"} mt={"5"}>
        Designed and developed by <Link>Wajid Kashoo</Link>
      </Text>
    </Container>
  );
}

export default Footer;
