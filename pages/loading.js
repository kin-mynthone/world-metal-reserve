import {
  Flex,
  useColorModeValue,
  Box,
  VStack,
  Image,
  Text,
} from "@chakra-ui/react";
import { gcloading } from "../constants/data";
import { MotionFlex, MotionButton } from "../constants/components/motion";
import { startUpStore } from "../store/start_up";
import "@fontsource/poppins";
import { useWindowSize } from "../custom_hooks";
import Router from "next/router";
import "@fontsource/baskervville";
import { chakra } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { BsArrowRightShort } from "react-icons/bs";

export default function Loading() {
  const { height, width } = useWindowSize();

  const setshowStartup = startUpStore((state) => state.set_show_startup);

  useEffect(() => {
    setshowStartup(true);
  });
  return (
    <Flex
      flexDir={["column", "column", "row", "row"]}
      height={"100vh"}
      alignItems={"center"}
      justifyContent={"center"}
      bg="rgba(0,26,10,0.8)"
    >
      <chakra.video
        position={"absolute"}
        objectFit={"cover"}
        zIndex={-1}
        h={"100vh"}
        w={"100%"}
        autoPlay
        muted
        loop
      >
        <chakra.source src="bgvideo.mp4" type="video/mp4" />
      </chakra.video>
      <MotionFlex
        initial={{ opacity: 0 }}
        animate={{ opacity: 100 }}
        transition={{ ease: "easeIn", duration: 10 }}
        zIndex={20}
      >
        <VStack position={"relative"} spacing={"50px"}>
          <Box
            height={[70, 90, 90, 90, 90, 90]}
            width={[83, 103, 103, 103, 103, 103]}
          >
            <Image
              src={"gcloading.png"}
              alt="gsdb icon png"
              draggable="false"
            />
          </Box>
          <VStack
            alignItems={"center"}
            spacing={"-1"}
            pb={["10%", "5%", "5%", "5%", "5%", "5%"]}
          >
            <chakra.h3
              fontFamily={"Baskervville"}
              fontSize={["30px", "40px", "40px", "40px", "40px", "50px"]}
              fontWeight="thin"
              letterSpacing={{
                base: "normal",
                md: "normal",
              }}
              color="#E6B85E"
              whiteSpace={["normal", "normal", "pre-line", "pre-line"]}
            >
              {`wmr`}
            </chakra.h3>
            <chakra.p
              fontSize={["14px", "14px", "15px", "15px", "15px", "20px"]}
              color="#FFFFFF"
              whiteSpace={["normal", "normal", "pre-line", "pre-line"]}
              letterSpacing={{ base: "normal", md: "10px" }}
              fontFamily={"Poppins"}
            >
              {`INVEST THE FUTURE OF TOMORROW`}
            </chakra.p>
          </VStack>
          <MotionButton
            width={"180px"}
            backgroundColor={"transparent"}
            _focus={{ border: "none" }}
            _focusWithin={{ backgroundColor: "transparent" }}
            _hover={{
              backgroundColor: "transparent",
              cursor: "pointer",
            }}
            flexDirection={"row"}
            whileTap={{
              scale: 0.9,
            }}
            whileHover={{
              scale: 1.1,
            }}
            onClick={() => {
              Router.push({
                pathname: "/home",
              });
            }} //update this
          >
            <Text
              fontSize={["14px", "14px", "15px", "15px", "18px", "20px"]}
              color={"white"}
            >
              Continue
            </Text>
            <BsArrowRightShort size={"30px"} color={"white"} />
          </MotionButton>
        </VStack>
      </MotionFlex>
    </Flex>
  );
}
