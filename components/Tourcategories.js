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
              top={"75%"}
              left={"5%"}
              fontSize={"3xl"}
              color={"#fff"}
              fontWeight={"700"}
            >
              Save 15% On 2023 Adventures
            </Heading>
            <Box position={"absolute"} top={"10%"} right={"5%"}>
              <AiOutlineHeart fontSize={"1.5rem"} color={"#fff"} />
            </Box>
            <Box
              position={"absolute"}
              bottom={"8%"}
              left={"5%"}
              display={"flex"}
              gap={"3"}
            >
              <Text color={"#fff"} fontSize={"1.1rem"}>
                Book your 2023 gateway today and save
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
              top={"75%"}
              left={"5%"}
              fontSize={"3xl"}
              color={"#fff"}
              fontWeight={"700"}
            >
              Your Guide to Cycling Adventures
            </Heading>
            <Box position={"absolute"} top={"10%"} right={"5%"}>
              <AiOutlineHeart fontSize={"1.5rem"} color={"#fff"} />
            </Box>
            <Box
              position={"absolute"}
              bottom={"8%"}
              left={"5%"}
              display={"flex"}
              gap={"3"}
            >
              <Text color={"#fff"} fontSize={"1.1rem"}>
                Book our collection of relaxing,flat rides and challenging
                hairpin climbs
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
            src="https://www.peakadventuretour.com/blog/wp-content/uploads/2019/02/Dal-Lake-Srinagar.jpg"
            h={"400px"}
            w={"1240px"}
            loading={"lazy"}
            borderRadius={"8px"}
          />
          <Heading
            position={"absolute"}
            top={"80%"}
            left={"2%"}
            fontSize={"3xl"}
            color={"#fff"}
            fontWeight={"700"}
          >
            Your Guide to Cultural Adventures
          </Heading>
          <Box position={"absolute"} top={"10%"} right={"5%"}>
            <AiOutlineHeart fontSize={"1.5rem"} color={"#fff"} />
          </Box>
          <Box
            position={"absolute"}
            bottom={"5%"}
            left={"2%"}
            display={"flex"}
            gap={"3"}
          >
            <Text color={"#fff"} fontSize={"1.1rem"}>
              Discover ancient ruins,town squares and local delicacies with the
              experts
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
              top={"75%"}
              left={"5%"}
              fontSize={"3xl"}
              color={"#fff"}
              fontWeight={"700"}
            >
              Win a LifeOfAdventure
            </Heading>
            <Box position={"absolute"} top={"10%"} right={"5%"}>
              <AiOutlineHeart fontSize={"1.5rem"} color={"#fff"} />
            </Box>
            <Box
              position={"absolute"}
              bottom={"10%"}
              left={"5%"}
              display={"flex"}
              gap={"3"}
            >
              <Text color={"#fff"} fontSize={"1.1rem"}>
                Win 1 trip.EveryYear.ForLife.EnterNow
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
              src="./tourtwo.jpg"
              h={"400px"}
              w={"600px"}
              loading={"lazy"}
              borderRadius={"8px"}
            />
            <Heading
              position={"absolute"}
              top={"75%"}
              left={"5%"}
              fontSize={"3xl"}
              color={"#fff"}
              fontWeight={"700"}
            >
              Last Minute Vacations
            </Heading>
            <Box position={"absolute"} top={"10%"} right={"5%"}>
              <AiOutlineHeart fontSize={"1.5rem"} color={"#fff"} />
            </Box>
            <Box
              position={"absolute"}
              bottom={"10%"}
              left={"5%"}
              display={"flex"}
              gap={"3"}
            >
              <Text color={"#fff"} fontSize={"1.1rem"}>
                Spontaneous adventures at your fingertips
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
              top={"75%"}
              left={"5%"}
              fontSize={"3xl"}
              color={"#fff"}
              fontWeight={"700"}
              letterSpacing={".1rem"}
            >
              Kashmir Holidays
            </Heading>
            <Box position={"absolute"} top={"10%"} right={"5%"}>
              <AiOutlineHeart fontSize={"1.5rem"} color={"#fff"} />
            </Box>
            <Box
              position={"absolute"}
              bottom={"10%"}
              left={"5%"}
              display={"flex"}
              gap={"3"}
            >
              <Text color={"#fff"} fontSize={"1.3rem"}>
                {` if there is a heaven on earth It's here!`}
              </Text>
            </Box>
          </Box>
        </Flex>
      </Box>
    </Container>
  );
}

export default Tourcategories;
