import { Flex, SimpleGrid, HStack, Text, Box, VStack } from "@chakra-ui/react";
import { Link } from "react-scroll/modules";

import Image from "next/image";
import { useWindowSize } from "../../../custom_hooks";
import { MotionButton, MotionFlex } from "/constants/components/motion";
import { gcloading, bank, brain, agreement, mainlogo1 } from "/constants/data";
import { FaTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { AiFillInstagram, AiFillFacebook } from "react-icons/ai";
import { BsArrowRightShort } from "react-icons/bs";
import { chakra } from "@chakra-ui/react";
import Router from "next/router";

export default function Footer() {
  const { height, width } = useWindowSize();

  return (
    <Flex
      w={"full"}
      bg="#212121"
      flexDir={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      position={"relative"}
    >
      <Flex
        flexDir={"column"}
        py={["10%", "3%", "3%", "3%", "3%", "3%"]}
        px={["5%", "3%", "3%", "3%", "3%", "3%"]}
        alignItems={"start"}
        justifyContent={"space-around"}
        width={[width, width - 14, width - 14, width - 14, width, width - 14]}
        bgColor={"#383A38"}
      >
        <HStack
          alignItems={"start"}
          spacing={5}
          display={{
            base: "none",
            md: "flex",
          }}
        >
          <chakra.h3
            fontFamily={"Poppins.black"}
            fontSize={["28px", "40px", "40px", "40px", "45px", "50px"]}
            fontWeight="black"
            letterSpacing={{
              base: "normal",
              md: "normal",
            }}
            id={"STAT"}
            color="#FFFFFF"
            whiteSpace={["normal", "normal", "pre-line", "pre-line"]}
          >
            {`Start your new journey `}
          </chakra.h3>

          <chakra.h3
            fontFamily={"Poppins.black"}
            fontSize={["28px", "40px", "40px", "40px", "45px", "50px"]}
            fontWeight="black"
            letterSpacing={{
              base: "normal",
              md: "normal",
            }}
            id={"STAT"}
            color="#EAD8A2"
            whiteSpace={["normal", "normal", "pre-line", "pre-line"]}
          >
            {`with us!`}
          </chakra.h3>
        </HStack>
        <VStack
          alignItems={"start"}
          spacing={-2}
          display={{
            base: "flex",
            md: "none",
          }}
        >
          <chakra.h3
            fontFamily={"Poppins.black"}
            fontSize={["28px", "40px", "40px", "40px", "45px", "50px"]}
            fontWeight="black"
            letterSpacing={{
              base: "normal",
              md: "normal",
            }}
            id={"STAT"}
            color="#FFFFFF"
            whiteSpace={["normal", "normal", "pre-line", "pre-line"]}
          >
            {`Start your new journey `}
          </chakra.h3>

          <chakra.h3
            fontFamily={"Poppins.black"}
            fontSize={["28px", "40px", "40px", "40px", "45px", "50px"]}
            fontWeight="black"
            letterSpacing={{
              base: "normal",
              md: "normal",
            }}
            id={"STAT"}
            color="#EAD8A2"
            whiteSpace={["normal", "normal", "pre-line", "pre-line"]}
          >
            {`with us!`}
          </chakra.h3>
        </VStack>
        <Flex
          w={"full"}
          flexDir={["column", "column", "row", "row", "row", "row"]}
          alignItems={"start"}
          alignSelf={"start"}
          justifyContent={"space-between"}
          alignContent={"space-between"}
          spacingY={"20px"}
        >
          <SimpleGrid
            pt={["60px"]}
            alignItems={"start"}
            alignSelf={"start"}
            justifyItems={"start"}
            spacingX={"50px"}
            spacingY={"30px"}
            columns={[1, 1, 1, 1, 3, 3]}
          >
            <VStack spacing={1} alignItems={"start"}>
              <Text
                fontSize={["15px", "12px", "12px", "12px", "20px", "20px"]}
                color={"white"}
                fontWeight={"black"}
                marginRight={"5"}
              >
                We are Located at
              </Text>

              <Text
                fontSize={["12px", "12px", "12px", "12px", "13px", "13px"]}
                color={"white"}
                marginRight={"5"}
              >
                The Pearl, Midwaystraat 11, Almere, The Netherlands
              </Text>
            </VStack>
            <VStack spacing={1} alignItems={"start"}>
              <Text
                fontSize={["15px", "12px", "12px", "12px", "20px", "20px"]}
                color={"white"}
                fontWeight={"black"}
                marginRight={"5"}
              >
                You can reach us
              </Text>

              <Text
                fontSize={["12px", "12px", "12px", "12px", "13px", "13px"]}
                color={"white"}
                marginRight={"5"}
              >
                Email: info@wmr.com
              </Text>
              <Text
                fontSize={["12px", "12px", "12px", "12px", "13px", "13px"]}
                color={"white"}
                marginRight={"5"}
              >
                Mobile: +31 (0)85 022 09 99
              </Text>
            </VStack>
          </SimpleGrid>
        </Flex>
      </Flex>

      <chakra.p
        fontSize={["10px", "10px", "10px", "10px", "10px", "10px"]}
        color={"rgba(255, 255, 255, 0.8)"}
        fontFamily={"Poppins"}
        py={{
          base: "10px",
          sm: "10px",
        }}
      >
        © 2022 wmr & Partners B.V, All Rights Reserved.
      </chakra.p>
    </Flex>
  );
}
