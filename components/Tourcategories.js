import { Box, Container, Heading, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import Categories from "./Categories";
import styles from "../styles/discription.module.css";
import { GoLocation } from "react-icons/go";
import { AiOutlineHeart } from "react-icons/ai";

function Tourcategories() {
  return (
    <Container
      maxW={"100%"}
      backgroundColor={"#F7F7F7"}
      px={"5rem"}
      py={"8rem"}
    >
      <Heading textAlign={"center"} my={"8"} className={styles.heading}>
        Tour categories
      </Heading>
      <Box
        display={"flex"}
        gap={"10"}
        flexWrap={"wrap"}
        maxW={"100%"}
        justifyContent={"center"}
        alignItems={"center"}
        mt={"5rem"}
      >
        <Flex maxWidth={"100%"} gap={"8"}>
          <Box
            position={"relative"}
            borderRadius={"8px"}
            cursor={"pointer"}
            overflow={"hidden"}
            transition={"all 0.2s"}
            h={"400px"}
            w={"600px"}
          >
            <Image
              src="./home.jpg"
              h={"400px"}
              w={"600px"}
              loading={"lazy"}
              borderRadius={"8px"}
            />
            <Heading
              position={"absolute"}
              top={"70%"}
              left={"5%"}
              fontSize={"2xl"}
              color={"#fff"}
              fontWeight={"700"}
            >
              Kashmir
            </Heading>
            <Box position={"absolute"} top={"10%"} right={"5%"}>
              <AiOutlineHeart fontSize={"1.5rem"} color={"#fff"} />
            </Box>
            <Box
              position={"absolute"}
              bottom={"15%"}
              left={"5%"}
              display={"flex"}
              gap={"3"}
            >
              <GoLocation fontSize={"1.5rem"} color={"#fff"} />
              <Text color={"#fff"} fontSize={"1.3rem"}>
                Kashmir
              </Text>
            </Box>
          </Box>
          <Box
            position={"relative"}
            borderRadius={"8px"}
            cursor={"pointer"}
            overflow={"hidden"}
            transition={"all 0.2s"}
            h={"400px"}
            w={"600px"}
          >
            <Image
              src="./tourone.jpg"
              h={"400px"}
              w={"600px"}
              loading={"lazy"}
              borderRadius={"8px"}
            />
            <Heading
              position={"absolute"}
              top={"70%"}
              left={"5%"}
              fontSize={"2xl"}
              color={"#fff"}
              fontWeight={"700"}
            >
              Kashmir
            </Heading>
            <Box position={"absolute"} top={"10%"} right={"5%"}>
              <AiOutlineHeart fontSize={"1.5rem"} color={"#fff"} />
            </Box>
            <Box
              position={"absolute"}
              bottom={"15%"}
              left={"5%"}
              display={"flex"}
              gap={"3"}
            >
              <GoLocation fontSize={"1.5rem"} color={"#fff"} />
              <Text color={"#fff"} fontSize={"1.3rem"}>
                Kashmir
              </Text>
            </Box>
          </Box>
        </Flex>

        <Box
          position={"relative"}
          borderRadius={"8px"}
          cursor={"pointer"}
          overflow={"hidden"}
          transition={"all 0.2s"}
          minH={"400px"}
          maxW={"1380px"}
        >
          <Image
            src="./tourtwo.jpg"
            h={"400px"}
            w={"1240px"}
            loading={"lazy"}
            borderRadius={"8px"}
          />
          <Heading
            position={"absolute"}
            top={"70%"}
            left={"5%"}
            fontSize={"2xl"}
            color={"#fff"}
            fontWeight={"700"}
          >
            Kashmir
          </Heading>
          <Box position={"absolute"} top={"10%"} right={"5%"}>
            <AiOutlineHeart fontSize={"1.5rem"} color={"#fff"} />
          </Box>
          <Box
            position={"absolute"}
            bottom={"15%"}
            left={"5%"}
            display={"flex"}
            gap={"3"}
          >
            <GoLocation fontSize={"1.5rem"} color={"#fff"} />
            <Text color={"#fff"} fontSize={"1.3rem"}>
              Kashmir
            </Text>
          </Box>
        </Box>
        <Flex gap={"10"}>
          <Box
            position={"relative"}
            borderRadius={"8px"}
            cursor={"pointer"}
            overflow={"hidden"}
            transition={"all 0.2s"}
            h={"400px"}
            w={"390px"}
          >
            <Image
              src="./tourthree.jpg"
              h={"400px"}
              w={"600px"}
              loading={"lazy"}
              borderRadius={"8px"}
            />
            <Heading
              position={"absolute"}
              top={"70%"}
              left={"5%"}
              fontSize={"2xl"}
              color={"#fff"}
              fontWeight={"700"}
            >
              Kashmir
            </Heading>
            <Box position={"absolute"} top={"10%"} right={"5%"}>
              <AiOutlineHeart fontSize={"1.5rem"} color={"#fff"} />
            </Box>
            <Box
              position={"absolute"}
              bottom={"15%"}
              left={"5%"}
              display={"flex"}
              gap={"3"}
            >
              <GoLocation fontSize={"1.5rem"} color={"#fff"} />
              <Text color={"#fff"} fontSize={"1.3rem"}>
                Kashmir
              </Text>
            </Box>
          </Box>
          <Box
            position={"relative"}
            borderRadius={"8px"}
            cursor={"pointer"}
            overflow={"hidden"}
            transition={"all 0.2s"}
            h={"400px"}
            w={"390px"}
          >
            <Image
              src="./tourfour.jpg"
              h={"400px"}
              w={"600px"}
              loading={"lazy"}
              borderRadius={"8px"}
            />
            <Heading
              position={"absolute"}
              top={"70%"}
              left={"5%"}
              fontSize={"2xl"}
              color={"#fff"}
              fontWeight={"700"}
            >
              Kashmir
            </Heading>
            <Box position={"absolute"} top={"10%"} right={"5%"}>
              <AiOutlineHeart fontSize={"1.5rem"} color={"#fff"} />
            </Box>
            <Box
              position={"absolute"}
              bottom={"15%"}
              left={"5%"}
              display={"flex"}
              gap={"3"}
            >
              <GoLocation fontSize={"1.5rem"} color={"#fff"} />
              <Text color={"#fff"} fontSize={"1.3rem"}>
                Kashmir
              </Text>
            </Box>
          </Box>
          <Box
            position={"relative"}
            borderRadius={"8px"}
            cursor={"pointer"}
            overflow={"hidden"}
            transition={"all 0.2s"}
            h={"400px"}
            w={"390px"}
          >
            <Image
              src="./tourfive.jpg"
              h={"400px"}
              w={"600px"}
              loading={"lazy"}
              borderRadius={"8px"}
            />
            <Heading
              position={"absolute"}
              top={"70%"}
              left={"5%"}
              fontSize={"2xl"}
              color={"#fff"}
              fontWeight={"700"}
            >
              Kashmir
            </Heading>
            <Box position={"absolute"} top={"10%"} right={"5%"}>
              <AiOutlineHeart fontSize={"1.5rem"} color={"#fff"} />
            </Box>
            <Box
              position={"absolute"}
              bottom={"15%"}
              left={"5%"}
              display={"flex"}
              gap={"3"}
            >
              <GoLocation fontSize={"1.5rem"} color={"#fff"} />
              <Text color={"#fff"} fontSize={"1.3rem"}>
                Kashmir
              </Text>
            </Box>
          </Box>
        </Flex>
      </Box>
    </Container>
  );
}

export default Tourcategories;
