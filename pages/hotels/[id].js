import {
  Box,
  Heading,
  Image,
  Text,
  Item,
  FormControl,
  Input,
  Button,
  Textarea,
  List,
  Flex,
  ListItem,
  ListIcon,
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionIcon,
  AccordionPanel,
  UnorderedList,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { AiTwotoneStar } from "react-icons/ai";
import { AiOutlineClockCircle } from "react-icons/ai";
import { FaPlaneArrival } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { FaPlaneDeparture } from "react-icons/fa";
import { BsPersonFill } from "react-icons/bs";
import styles from "../../styles/id.module.css";
import { MdCheckCircle } from "react-icons/md";
import data from "../../components/Hoteldata";
import { MdOutlineSettingsSuggest } from "react-icons/md";
import { BsArrowRightCircleFill, BsPeople } from "react-icons/bs";
import { BsArrowLeftCircleFill } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { FaAffiliatetheme } from "react-icons/fa";

export default function Hoteldetails() {
  const [Hotel, setHotel] = useState(null);
  const [img, setImg] = useState(0);
  const router = useRouter();
  const id = router.query.id;

  useEffect(() => {
    let hotel = data.find((hotel) => hotel.id == id);
    setHotel(hotel);
  }, []);
  if (!Hotel)
    return (
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        height={"100vh"}
        width={"100vw"}
        py={"8rem"}
      >
        <div className={styles.spinner}></div>
      </Box>
    );
  return (
    <Box
      maxW={"100vw"}
      py={"8rem"}
      minH={"80vh"}
      overflowX={"hidden"}
      fontFamily={("Montserrat", "sans-serif")}
      fontWeight={"300"}
      mx={"10"}
    >
      <Box py={"10"}>
        <Heading className={styles.heading}>{Hotel.heading}</Heading>
        <Box display={"flex"} gap={"3"} alignItems={"center"} py={"2"}>
          <GoLocation />
          <Text>{Hotel.address}</Text>
        </Box>
      </Box>
      <Box
        maxW={"100vw"}
        minH={"60vh"}
        position={"relative"}
        alignItems={"center"}
        justifyContent={"center"}
        mx={"auto"}
      >
        <Box position={"absolute"} left={"2%"} top={"50%"} cursor={"pointer"}>
          <BsArrowLeftCircleFill color="#fff" fontSize={"1.7rem"} />
        </Box>
        <Box
          position={"absolute"}
          right={"2%"}
          top={"50%"}
          cursor={"pointer"}
          onClick={() => {
            setImg(img + 1);
          }}
        >
          <BsArrowRightCircleFill
            left={"2%"}
            top={"50%"}
            color="#fff"
            fontSize={"1.7rem"}
          />
        </Box>
        <Image
          src={Hotel.img[0]}
          width={"100%"}
          height={"60vh"}
          objectFit={"cover"}
          overflowX={"hidden"}
        />
      </Box>

      <Box minH={"50vh"} bg={"#fff"} mx={"5rem"} width={"75%"}>
        <Box py={"3rem"}>
          <Heading
            fontWeight={"500"}
            textTransform={"uppercase"}
            py={"5"}
            className={styles.heading}
            mt={"5"}
          >
            overview
          </Heading>
          <Text
            fontSize={"md"}
            fontWeight={"300"}
            color={"#50595c"}
            fontFamily={("Montserrat", "sans-serif")}
            lineHeight={"6"}
            textAlign={"left"}
          >
            {Hotel.description}
          </Text>
        </Box>
        <Box>
          <Heading
            fontWeight={"500"}
            textTransform={"uppercase"}
            py={"5"}
            className={styles.heading}
            mt={"5"}
          >
            Hotel Facilities
          </Heading>
          <List>
            console.log(Hotel)
            {Hotel.hotelfacilities.map((facility) => {
              return (
                <Flex gap={"2"}>
                  <FaAffiliatetheme color={"#5191FA"} />

                  <ListItem>{facility}</ListItem>
                </Flex>
              );
            })}
          </List>
        </Box>
        <Box>
          <Heading
            className={styles.heading}
            fontWeight={"500"}
            textTransform={"uppercase"}
            py={"5"}
            mt={"5"}
          >
            Hotel Theme
          </Heading>
          <Flex gap={"10"}>
            {Hotel.hoteltheme.map((theme) => {
              return (
                <Box display={"flex"} alignItems={"center"} gap={"2"}>
                  <MdOutlineSettingsSuggest
                    fontSize={"1.2rem"}
                    color={"#5191FA"}
                  />
                  {theme}
                </Box>
              );
            })}
          </Flex>
        </Box>
      </Box>
    </Box>
  );
}
