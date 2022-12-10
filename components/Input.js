import { Button, Container, Box, Select, Heading } from "@chakra-ui/react";
import React, { useState } from "react";
import Modal from "./Modal";
import cards from "../components/AllTourData";
import { useRouter } from "next/router";

function Input() {
  const router = useRouter();
  const [openModal, setOpenModal] = useState(false);
  const [selectedDestination, setSelectedDestination] = useState("");
  const [selectedTourType, setSelectedTourType] = useState("");
  const [filteredData, setFiliteredData] = useState([]);
  const [data, setData] = useState(cards);

  const handleDestinationDropdownChange = (e) => {
    setSelectedDestination(e.target.value);
  };

  const handleTourTypeDropdownChange = (e) => {
    setSelectedTourType(e.target.value);
  };

  const handleSearchClick = () => {
    let newFilteredData = data;

    if (selectedDestination && selectedTourType) {
      newFilteredData = newFilteredData.filter(
        (item) =>
          item.title === selectedDestination &&
          item.tourType === selectedTourType
      );
      return setFiliteredData(newFilteredData);
    }
  };

  console.log(filteredData);

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
          onChange={handleDestinationDropdownChange}
        >
          <option value="Gulmarg">Gulmarg</option>
          <option value="Pahalgam">Pahalgam</option>
          <option value="Sonmarg">Sonmarg</option>
          <option value="Doodhpathri">Doodhpathri</option>
          <option value="Sinthan top">Sinthan top</option>
          <option value="Srinagar">Srinagar</option>
          <option value="Kargil">Kargil</option>
          <option value="Leh">Leh</option>
          <option value="Nubra Valley">Nubra Valley</option>
          <option value="Pangong Tso">Pangong Tso</option>
          <option value="Tso Moriri">Tso Moriri</option>
        </Select>
        <Select
          placeholder="Tour type"
          size="lg"
          variant="filled"
          zIndex={"10000"}
          fontSize={"1rem"}
          onChange={handleTourTypeDropdownChange}
        >
          <option value="Adventure Tour">Adventure Tour</option>
          <option value="City Tour">City Tour</option>
          <option value="Group Tour">Group Tour</option>
          <option value="Best Sellers">Best Sellers</option>
          <option value="City trips">City trips</option>
          <option value="Ecotourism<3">Ecotourism</option>
          <option value="Escorted Tour">Escorted Tour</option>
          <option value="Honeymoon & Couples">Honeymoon & Couples</option>
          <option value="Mountain Adventures">Mountain Adventures</option>
          <option value="Skiing Trips">Skiing Trips</option>
          <option value="Spiritual Tour">Spiritual Tour</option>
        </Select>

        <Button
          size="lg"
          fontSize={"1rem"}
          bg="#5191FA"
          color={"#fff"}
          variant="solid"
          _hover={{ bg: "blue.500", color: " white" }}
          style={{ padding: "1rem 2rem" }}
          onClick={handleSearchClick}
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
