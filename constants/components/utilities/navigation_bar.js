import {
  Box,
  CloseButton,
  Flex,
  HStack,
  IconButton,
  useColorMode,
  Text,
  useColorModeValue,
  useDisclosure,
  VStack,
  Spacer,
} from "@chakra-ui/react";
import { MotionButton } from "../../components/motion";
import React from "react";
import Router from "next/router";
import Image from "next/image";
import { HiMoon, HiSun } from "react-icons/hi";
import { AiOutlineMenu } from "react-icons/ai";
import { chakra } from "@chakra-ui/react";
import { default as NextLink } from "next/link";
import { mainlogo } from "../../../constants/data";
import { pagesStore } from "../../../store/pages";
import { Link } from "react-scroll/modules";
import "@fontsource/poppins";
import { useWindowSize } from "../../../custom_hooks";

export default function NavigationBar() {
  const mobileNav = useDisclosure();
  const cl = useColorModeValue("#FFFFFF", "#E6B85E");
  const mode = useColorModeValue("#FFFFFF", "#CDCDCD");
  const { toggleColorMode: toggleMode } = useColorMode();
  const SwitchIcon = useColorModeValue(HiMoon, HiSun);
  const klogoMode = useColorModeValue(mainlogo, mainlogo);
  const { height, width } = useWindowSize();

  const ref = React.useRef(null);

  const setPageIndex = pagesStore((state) => state.set_page_index);
  const getPageIndex = pagesStore((state) => state.page_index);

  const bg = useColorModeValue("white", "#FFFFFF");
  const MobileNavContent = (
    <VStack
      zIndex={10}
      top={0}
      left={0}
      right={0}
      display={mobileNav.isOpen ? "flex" : "none"}
      flexDirection="column"
      p={2}
      pb={4}
      m={5}
      bg={bg}
      spacing={3}
      borderRadius={"20px"}
      shadow="lg"
    >
      <Link
        activeClass="active"
        to="au"
        spy={true}
        smooth={true}
        offset={0}
        duration={1000}
      >
        <MotionButton
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
            color: cl,
          }}
          onClick={null} //update this
        >
          <Text
            fontWeight={getPageIndex == 2 ? "black" : "thin"}
            fontSize="14px"
            color={getPageIndex == 2 ? "#E6B85E" : "#232323"}
            _dark={{
              color: getPageIndex == 2 ? "#E6B85E" : "gray",
            }}
            _hover={{
              color: "#E6B85E",
            }}
          >
            About us
          </Text>
        </MotionButton>
      </Link>
      <Link
        activeClass="active"
        to="toi"
        spy={true}
        smooth={true}
        offset={0}
        duration={1000}
      >
        <MotionButton
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
            color: cl,
          }}
          onClick={null} //update this
        >
          <Text
            fontWeight={getPageIndex == 2 ? "black" : "thin"}
            fontSize="14px"
            color={getPageIndex == 2 ? "#E6B85E" : "#232323"}
            _dark={{
              color: getPageIndex == 2 ? "#E6B85E" : "gray",
            }}
            _hover={{
              color: "#E6B85E",
            }}
          >
            Types of Investments
          </Text>
        </MotionButton>
      </Link>

      <Link
        activeClass="active"
        to="partners"
        spy={true}
        smooth={true}
        offset={-10}
        duration={1000}
      >
        <MotionButton
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
            color: cl,
          }}
          onClick={null} //update this
        >
          <Text
            fontWeight={getPageIndex == 4 ? "black" : "thin"}
            fontSize="14px"
            color={getPageIndex == 4 ? "#E6B85E" : "#232323"}
            _dark={{
              color: getPageIndex == 4 ? "#E6B85E" : "gray",
            }}
            _hover={{
              color: "#E6B85E",
            }}
          >
            Partners
          </Text>
        </MotionButton>
      </Link>

      <CloseButton
        aria-label="Close menu"
        justifySelf="self-start"
        onClick={mobileNav.onClose}
      />
    </VStack>
  );
  return (
    <React.Fragment>
      <Box w={"full"} h={"200px"} position={"absolute"}>
        <chakra.header
          ref={ref}
          position={"absolute"}
          right={["0px", "10px", "75px", "75px", "0px", "0px"]}
          left={["10px", "10px", "75px", "75px", "75px", "75px"]}
          zIndex={2}
        >
          <Flex alignItems="center" justifyContent="space-between" mx="auto">
            <Link display="flex" alignItems="center" href="/">
              <Box
                height={["50px", "50px", "50px", "50px", "50px", "50px"]}
                width={["150px", "220px", "50px", "50px", "150px", "250px"]}
              >
                <Image src={klogoMode} draggable="false" alt="gc icon png" />
              </Box>
            </Link>
            <Spacer />
          </Flex>

          {MobileNavContent}
        </chakra.header>
      </Box>
    </React.Fragment>
  );
}
