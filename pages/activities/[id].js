import React, { useState, useEffect } from "react";
import data from "../../components/Activitiesdata";
import { useRouter } from "next/router";
import styles from "../../styles/spinner.module.css";
import { GoLocation } from "react-icons/go";
import { FcApproval } from "react-icons/fc";
import { FcDisapprove } from "react-icons/fc";
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
function Activitiesid() {
  const [Activity, setActivity] = useState(null);
  const router = useRouter();
  const id = router.query.id;

  useEffect(() => {
    let activity = data.find((activity) => activity.id == id);
    setActivity(activity);
  }, []);
  if (!Activity)
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
      <Box maxW={"100vw"} minH={"60vh"} mx={"auto"}>
        <Image
          src={Activity.img}
          width={"100%"}
          height={"60vh"}
          objectFit={"cover"}
          overflowX={"hidden"}
        />
        <Box px={"5rem"} py={"10"}>
          <Heading className="heading">{Activity.heading}</Heading>
          <Box display={"flex"} gap={"3"} alignItems={"center"} py={"2"}>
            <GoLocation />
            <Text>{Activity.address}</Text>
          </Box>
        </Box>
      </Box>

      <Box minH={"30vh"} bg={"#fff"} mx={"5rem"} width={"75%"}>
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
            {Activity.overview}
          </Text>
        </Box>
        <Box borderBottom={"1px solid #d2c5ca"}>
          <UnorderedList>
            {Activity.list.map((item) => {
              return (
                <Flex
                  gap={"2"}
                  p={"3"}
                  key={Activity.id}
                  width={"30rem"}
                  cursor={"pointer"}
                >
                  <ListItem>{item}</ListItem>
                </Flex>
              );
            })}
          </UnorderedList>
        </Box>
        <Box>
          <Flex
            alignItems={"center"}
            gap={"2"}
            p={"3"}
            my={"1"}
            boxShadow={"lg"}
            _hover={{ boxShadow: "xl" }}
            width={"15rem"}
            cursor={"pointer"}
            key={Activity.id}
          >
            {Activity.included.map((item) => {
              return (
                <Box display={"flex"} flexDir={"column"} key={Activity.id}>
                  <Flex gap={"2"} alignItems={"center"}>
                    <FcApproval />
                    <Text>{item}</Text>
                  </Flex>
                </Box>
              );
            })}

            {Activity.excluded.map((item) => {
              return (
                <Flex gap={"2"} alignItems={"center"} key={Activity.id}>
                  <FcDisapprove />
                  <Text>{item}</Text>
                </Flex>
              );
            })}
          </Flex>

          <Accordion defaultIndex={[0]} allowMultiple width={"45rem"} mt={"10"}>
            <AccordionItem>
              <h2>
                {Activity.questions.map((question) => {
                  return (
                    <AccordionButton key={Activity.id}>
                      <Box flex="1" textAlign="left">
                        <Heading
                          className={styles.heading}
                          fontWeight={"500"}
                          textTransform={"uppercase"}
                          fontSize={"xl"}
                        >
                          {question}
                        </Heading>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  );
                })}
              </h2>

              {Activity.answers.map((answer) => {
                return (
                  <AccordionPanel pb={4} color={"#F9F9F9"} key={Activity.id}>
                    {answer}
                  </AccordionPanel>
                );
              })}
            </AccordionItem>
          </Accordion>
        </Box>
      </Box>
    </Box>
  );
}
export default Activitiesid;
