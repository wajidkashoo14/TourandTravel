import {
  Box,
  Heading,
  Image,
  Text,
  FormControl,
  Input,
  Button,
  Textarea,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";
import React from "react";
import { useRouter } from "next/router";
import { AiTwotoneStar } from "react-icons/ai";
import { AiOutlineClockCircle } from "react-icons/ai";
import { FaPlaneArrival } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { FaPlaneDeparture } from "react-icons/fa";
import { BsPersonFill } from "react-icons/bs";
import styles from "../../styles/id.module.css";
import { MdCheckCircle } from "react-icons/md";

function Tourdetails() {
  const router = useRouter();
  const id = router.query.id;
  console.log(id);

  return (
    <Box maxW={"100vw"} pt={"8rem"} minH={"80vh"} overflowX={"hidden"}>
      <Box maxW={"100vw"} h={"80vh"} position={"relative"}>
        <Image
          src="/home.jpg"
          width={"100%"}
          height={"80vh"}
          objectFit={"cover"}
          overflowX={"hidden"}
        />
        <Box
          display={"flex"}
          mt={"-3rem"}
          flexDir={"column"}
          gap={"3"}
          px={"10"}
        >
          <Box>
            <Heading
              fontSize={"3xl"}
              textTransform={"capitalize"}
              position={"absolute"}
              color={"#fff"}
              mt={"-2rem"}
            >
              kashmir 3D 4N tour
            </Heading>
          </Box>
          <Box display={"flex"} gap={"1"}>
            <AiTwotoneStar color={"#FFDC00"} />
            <AiTwotoneStar color={"#FFDC00"} />
            <AiTwotoneStar color={"#FFDC00"} />
            <AiTwotoneStar color={"#FFDC00"} />
            <AiTwotoneStar color={"#Fff"} />
          </Box>
        </Box>
      </Box>
      <Box
        width={"100vw"}
        height={"35vh"}
        bg={"#F5F5F5"}
        display={"flex"}
        justifyContent={"flex-start"}
        py={"5rem"}
        gap={"15rem"}
        px={"10rem"}
        fontSize={"1.2rem"}
      >
        <Box
          display={"flex"}
          flexDir={"column"}
          gap={"5"}
          alignItems={"flex-start"}
        >
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignContent={"center"}
            gap={"5"}
          >
            <AiOutlineClockCircle color="#ff5216" />
            <Text>3 Days and 4 Nights</Text>
          </Box>
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignContent={"center"}
            gap={"5"}
          >
            <FaPlaneArrival color="#ff5216" />
            <Text>Kashmir Srinagar</Text>
          </Box>
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignContent={"center"}
            gap={"5"}
          >
            <IoIosPeople color="#ff5216" />
            <Text>Max people:50</Text>
          </Box>
        </Box>
        <Box
          display={"flex"}
          justifyContent={"flex-start"}
          alignItems={"flex-start"}
          flexDir={"column"}
          gap={"5"}
        >
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignContent={"center"}
            gap={"5"}
          >
            <FaPlaneDeparture color="#ff5216" />
            <Text>Native Place</Text>
          </Box>
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignContent={"center"}
            gap={"5"}
          >
            <BsPersonFill color="#ff5216" />
            <Text>Mi age: Any</Text>
          </Box>
        </Box>
      </Box>
      <Box
        width={"100vw"}
        minH={"90vh"}
        bg={"#fff"}
        p={"10"}
        display={"flex"}
        position={"relative"}
      >
        <Box width={"55%"}>
          <Heading
            fontWeight={"500"}
            textTransform={"uppercase"}
            py={"5"}
            className={styles.heading}
          >
            overview
          </Heading>
          <Text fontSize={"lg"} fontWeight={"400"} color={"#333"}>
            Srinagar, the summer capital of Jammu and Kashmir is located in the
            heart of the Kashmir valley at an altitude of 1,730 m above sea
            level. Spread on both sides of the river Jhelum the city is famous
            for its natural beauty, gardens, waterfronts and houseboats.
            Srinagar is called the city of lakes and the Venice of the East,
            fascinating tourists from centuries with its beautiful picturesque
            Himalayan backdrop, glittering lakes that are surrounded by
            houseboats and Shikaras and the majesty of Mughal architecture. The
            very absence of order in the location of the houses and their
            tumbled down appearance add a peculiar charm to the scenery. It has
            its own quaint lifestyle, telling a panoramic fairytale tour through
            the snow-capped mountains and Chinar trees, while enjoying the
            adventurous pleasures of hiking, mountain biking, and rafting. The
            city is also famous for traditional Kashmiri handicrafts and dried
            fruits.
          </Text>
        </Box>
        <Box
          height={"90vh"}
          width={"400px"}
          bg={"#fff"}
          p={"10"}
          top={"-20%"}
          boxShadow={"lg"}
          position={"absolute"}
          right={"8%"}
          borderRadius={"10px"}
        >
          <Heading fontSize={"2xl"} py={"5"} className={styles.heading}>
            Enquiry Form
          </Heading>
          <FormControl display={"flex"} flexDir={"column"} gap={"5"}>
            <Input type="text" placeholder={"Name"} size="lg" />
            <Input type="number" placeholder={"Mobile Number"} size="lg" />
            <Input type="number" placeholder={"Number of persons"} size="lg" />
            <Input type="number" placeholder={"Number of days"} size="lg" />
            <Input type="email" placeholder={"Email"} size="lg" />
            <Textarea type="text" placeholder={"Your Enquiry"} size="lg" />
          </FormControl>
          <Button
            size="lg"
            bg="#5191FA"
            color={"#fff"}
            variant="solid"
            _hover={{ bg: "blue.500", color: " white" }}
            mt={"10"}
          >
            Submit Enquiry
          </Button>
        </Box>
      </Box>
      <Box
        px={"10"}
        display={"flex"}
        flexDir={"column"}
        gap={"10"}
        minH={"80vh"}
      >
        <Heading fontWeight={"600"} className={styles.heading}>
          Highlights
        </Heading>
        <List fontSize={"lg"} fontWeight={"400"} color={"#333"}>
          <ListItem>
            <ListIcon as={MdCheckCircle} color="green.500" />1 Night stay at
            Hotel/Houseboat in Srinagar
          </ListItem>
          <ListItem>
            <ListIcon as={MdCheckCircle} color="green.500" />1 Night stay at
            Hotel in Pahalgam/Sonmarg/Gulmarg (as per preference).
          </ListItem>
          <ListItem>
            <ListIcon as={MdCheckCircle} color="green.500" />1 Hour Shikara
            Ride.
          </ListItem>
          <ListItem>
            <ListIcon as={MdCheckCircle} color="green.500" />
            All Transfers from pick up till drop.
          </ListItem>
          <ListItem>
            <ListIcon as={MdCheckCircle} color="green.500" />
            Sightseeing transfers in Srinagar City only (Mughal Gardens, Dal
            Lake, Nigeen Lake, Cultural/Spiritual Tour or others as per
            preferences).
          </ListItem>
          <ListItem>
            <ListIcon as={MdCheckCircle} color="green.500" />
            Sightseeing Transfers in Pahalgam, Sonmarg, and Gulmarg are bound to
            be Hired separately as per J&K Tourism Advisory.
          </ListItem>
          <ListItem>
            <ListIcon as={MdCheckCircle} color="green.500" />
            24x7 Tour Assistance.
          </ListItem>
          <ListItem>
            <ListIcon as={MdCheckCircle} color="green.500" />
            Dinner & Breakfast at all Hotels/Houseboats.
          </ListItem>
          <ListItem>
            <ListIcon as={MdCheckCircle} color="green.500" />
            Complimentary Cake for Special Occasions Tour (birthday,
            anniversary, honeymoon, or others)
          </ListItem>
        </List>
      </Box>
    </Box>
  );
}

export default Tourdetails;
