import { Button, Container, Box, Select, Heading } from "@chakra-ui/react";
import React, { useState } from "react";
import Modal from "./Modal";
import styles from "../styles/Home.module.css";

function Input() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <Container
      marginTop={{ base: "-20rem", md: "-30rem", lg: "-30rem" }}
      gap={"8rem"}
      display={"flex"}
      flexDir={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      fontFamily={"Montserrat"}
      // opacity={".8"}
    >
      {openModal && <Modal closeModal={setOpenModal} />}
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={"5"}
        w={"60vw"}
        borderRadius={"5"}
        height={"5rem"}
        py={"3.5rem"}
        px={"2rem"}
        backgroundColor={"rgba(255,255,255,0.6)"}
        position={"relative"}
      >
        <Select
          placeholder="Where are you going"
          size="lg"
          variant="filled"
          zIndex={"10000"}
          fontSize={"1rem"}
          fontWeight={"400"}
        >
          <option value="option1">Gulmarg</option>
          <option value="option2">Pahalgam</option>
          <option value="option3">Sonmarg</option>
          <option value="option3">Doodhpathri</option>
          <option value="option3">Sinthan top</option>
          <option value="option3">Srinagar</option>
          <option value="option3">Kargil</option>
          <option value="option3">Leh</option>
          <option value="option3">Nubra Valley</option>
          <option value="option3">Pangong Tso</option>
          <option value="option3">Tso Moriri</option>
        </Select>
        <Select
          placeholder="Tour type"
          size="lg"
          variant="filled"
          zIndex={"10000"}
          fontSize={"1rem"}
        >
          <option value="">Adventure Tour</option>
          <option value="option2">City Tour</option>
          <option value="option3">Group Tour</option>
          <option value="option3">Best Sellers</option>
          <option value="option3">City trips</option>
          <option value="option3">Ecotourism</option>
          <option value="option3">Escorted Tour</option>
          <option value="option3">Honeymoon & Couples</option>
          <option value="option3">Mountain Adventures</option>
          <option value="option3">Skiing Trips</option>
          <option value="option3">Spiritual Tour</option>
        </Select>

        <Button
          size="lg"
          fontSize={"1rem"}
          bg="#5191FA"
          color={"#fff"}
          variant="solid"
          _hover={{ bg: "blue.500", color: " white" }}
          style={{ padding: "1rem 2rem" }}
          // zIndex={"10000"}
        >
          Search
        </Button>
      </Box>
      <Button
        size="md"
        bg="#5191FA"
        color={"#fff"}
        variant="solid"
        _hover={{ bg: "blue.500", color: " white" }}
        mt={"-5rem"}
        onClick={() => setOpenModal(true)}
      >
        Make an enquiry
      </Button>
    </Container>
  );
}

export default Input;
