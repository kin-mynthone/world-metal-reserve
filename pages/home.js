import {
  Box,
  Flex,
  IconButton,
  Text,
  Spacer,
  Image,
  VStack,
  HStack,
  Icon,
  SimpleGrid,
} from "@chakra-ui/react";
import React from "react";
import "@fontsource/baskervville";
import { MotionButton, MotionFlex } from "../constants/components/motion";
import { chakra } from "@chakra-ui/react";

import { startUpStore } from "../store/start_up";
import { useState, useEffect } from "react";

import { useWindowSize } from "../custom_hooks";

import "@fontsource/poppins";
export default function Home() {
  const setshowStartup = startUpStore((state) => state.set_show_startup);

  useEffect(() => {
    setshowStartup(false);
  });
  const { height, width } = useWindowSize();

  function CallToAction() {
    return (
      <Flex
        flexDir={["row", "column", "row", "row", "row", "row"]}
        height={["60vh", "30vh", "30vh", "30vh", "100vh", "100vh"]}
        bgColor={"#16365F"}
        alignItems={"end"}
        justifyContent={"start"}
      >
        <Image
          src={
            "https://images.unsplash.com/photo-1559058922-5d29e1f00075?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
          }
          alt="wmr"
          objectFit={"cover"}
          boxSize={"full"}
        />{" "}
        <Box
          position={"absolute"}
          boxSize="full"
          objectFit="cover"
          left={0}
          bgColor={"rgba(51, 51, 51, 0.8) "}
        ></Box>
        <VStack
          position={"absolute"}
          px={"5%"}
          alignSelf={"end"}
          alignItems={"start"}
          pb={["50px", "100px", "100px", "100px", "100px", "100px"]}
        >
          <VStack spacing={[-2, -6, -6, -6, -5, -6]} alignItems={"start"}>
            <chakra.h3
              fontFamily={"Poppins.black"}
              fontSize={["28px", "40px", "40px", "40px", "55px", "60px"]}
              fontWeight="black"
              letterSpacing={{
                base: "normal",
                md: "normal",
              }}
              color="#FFFFFF"
              whiteSpace={["normal", "normal", "pre-line", "pre-line"]}
            >
              {`World Metal Reserve`}
            </chakra.h3>
          </VStack>

          <chakra.p
            fontSize={["14px", "14px", "15px", "15px", "15px", "18px"]}
            color="#FFFFFF"
            fontWeight={"thin"}
            maxW={["90%", "70%", "70%", "70%", "70%", "70%"]}
            whiteSpace={["normal", "normal", "pre-line", "pre-line"]}
            letterSpacing={{ base: "normal", md: "2px" }}
            fontFamily={"Poppins"}
          >
            World Metal Reserve (WMR) is an Amsterdam based, Dutch and European
            Union governed entity for: certification, registration, storage,
            shipping, and trade of precious and base metals including gold,
            silver and platinum. The decision to make the capital of The
            Netherlands, Amsterdam, the headquarters of World Metal Reserve
            (WMR) was established because of its critically-acclaimed
            international status. In the 17th century, the Dutch were the first
            to make trading in precious metals possible. In recent times, the
            Dutch have reformatted regulations; creating some of the strictest
            and most transparent regulations for bullions, and more. We are
            proud to have WMR governed under the Dutch and European laws as it
            gives WMR a head start to become the #1 gold standard resource in
            the world.
          </chakra.p>
        </VStack>
      </Flex>
    );
  }

  function Second() {
    return (
      <Flex
        flexDir={["column", "column", "row", "row", "row", "row"]}
        paddingTop={["20%", "2%", "2%", "2%", "10%", "10%"]}
        paddingBottom={["20%", "2%", "2%", "2%", "10%", "10%"]}
      >
        <VStack alignItems={"start"} spacing={"55px"} width={"100%"} px={"5%"}>
          <SimpleGrid
            alignItems={"start"}
            alignSelf={"start"}
            justifyItems={"start"}
            spacingX={"10px"}
            spacingY={"50px"}
            width={"full"}
            columns={[1, 1, 1, 1, 2, 2]}
          >
            <HStack alignItems={"start"} w={"80%"}>
              <VStack alignItems={"start"}>
                <Text color={"#3F3F3F"} fontSize={"25px"} fontWeight={"black"}>
                  1. Precious Metals
                </Text>
                <Text color={"#3F3F3F"} fontSize={"15px"}>
                  World Metal Reserve offers traders and investors essential
                  pre-investment information about precious metals from all over
                  the world.
                </Text>
              </VStack>
            </HStack>

            <HStack alignItems={"start"} w={"80%"}>
              <VStack alignItems={"start"}>
                <Text color={"#3F3F3F"} fontSize={"25px"} fontWeight={"black"}>
                  2. Market Data
                </Text>
                <Text color={"#3F3F3F"} fontSize={"15px"}>
                  World Metal Reserve provides crucial data for investors to use
                  for their business strategies.
                </Text>
              </VStack>
            </HStack>

            <HStack alignItems={"start"} w={"80%"}>
              <VStack alignItems={"start"}>
                <Text color={"#3F3F3F"} fontSize={"25px"} fontWeight={"black"}>
                  3. Expert Advisory
                </Text>
                <Text color={"#3F3F3F"} fontSize={"15px"}>
                  In the precious metal market, there is nothing more important
                  than accurate real-time data, especially for investors. Over
                  the years, WMR’s in-house precious metal experts have built a
                  solid global network of highly experienced traders and
                  distributors. Our members can exclusively benefit from their
                  collective knowledge and insights of the valuable market data.
                </Text>
              </VStack>
            </HStack>

            <HStack alignItems={"start"} w={"80%"}>
              <VStack alignItems={"start"}>
                <Text color={"#3F3F3F"} fontSize={"25px"} fontWeight={"black"}>
                  4. WMR Pricing Advisory
                </Text>
                <Text color={"#3F3F3F"} fontSize={"15px"}>
                  The WMR Pricing Model Advisory is based on global trading
                  activities. It calculates volume weighted averages of trades
                  which have been transacted through Ophir.
                </Text>
              </VStack>
            </HStack>
          </SimpleGrid>
        </VStack>
      </Flex>
    );
  }

  function Clearing() {
    return (
      <Flex
        flexDir={["row", "column", "row", "row", "row", "row"]}
        height={["60vh", "30vh", "30vh", "30vh", "50vh", "100vh"]}
        bgColor={"#16365F"}
        alignItems={"end"}
        justifyContent={"start"}
      >
        <Box
          w={width}
          filter={"auto"}
          brightness={"40%"}
          height={["60vh", "30vh", "30vh", "30vh", "50vh", "100vh"]}
        >
          <Image
            src={
              "https://images.unsplash.com/photo-1621977717126-e29965156a27?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2136&q=80"
            }
            alt="wmr"
            objectFit={"cover"}
            boxSize={"full"}
          />
        </Box>
        <HStack
          position={"absolute"}
          alignSelf={"center"}
          alignItems={"center"}
        >
          <VStack px={"5%"} alignItems={"start"}>
            <VStack spacing={[-2, -6, -6, -6, -5, -6]} alignItems={"start"}>
              <chakra.h3
                fontFamily={"Poppins.black"}
                fontSize={["28px", "40px", "40px", "40px", "25px", "60px"]}
                fontWeight="black"
                letterSpacing={{
                  base: "normal",
                  md: "normal",
                }}
                color="#FFFFFF"
                whiteSpace={["normal", "normal", "pre-line", "pre-line"]}
              >
                {`WMR Clearing`}
              </chakra.h3>
            </VStack>

            <chakra.p
              fontSize={["14px", "14px", "15px", "15px", "15px", "18px"]}
              color="#FFFFFF"
              fontWeight={"thin"}
              maxW={["90%", "70%", "70%", "70%", "80%", "70%"]}
              whiteSpace={["normal", "normal", "pre-line", "pre-line"]}
              fontFamily={"Poppins"}
            >
              {`WMR Clearing is our in-house clearing desk.
The WMR clearing desk uses the latest technologies and monitoring systems to ensure that deliveries are transacted to the appropriate parties. Our fees are marginal, and the lowest in the industry.`}
            </chakra.p>
          </VStack>

          <VStack
            px={"3%"}
            py={"2%"}
            alignItems={"start"}
            bgColor={"white"}
            w={"100%"}
          >
            <VStack spacing={[-2, -6, -6, -6, -5, -6]} alignItems={"start"}>
              <chakra.h3
                fontFamily={"Poppins.black"}
                fontSize={["28px", "40px", "40px", "40px", "25px", "60px"]}
                fontWeight="black"
                letterSpacing={{
                  base: "normal",
                  md: "normal",
                }}
                color="#3F3F3F"
                whiteSpace={["normal", "normal", "pre-line", "pre-line"]}
              >
                {`Key attributes`}
              </chakra.h3>
            </VStack>

            <VStack alignItems={"start"} pt={"10px"}>
              <HStack alignItems={"start"} w={"100%"}>
                <CircleIcon boxSize={2} mt={"6px"} fill={"#3F3F3F"} />

                <Text color={"#3F3F3F"} fontSize={"15px"}>
                  Live liability, positioning and collateral monitoring
                </Text>
              </HStack>

              <HStack alignItems={"start"} w={"80%"}>
                <CircleIcon boxSize={2} mt={"6px"} fill={"#3F3F3F"} />

                <Text color={"#3F3F3F"} fontSize={"15px"}>
                  EMIR compliant
                </Text>
              </HStack>

              <HStack alignItems={"start"} w={"80%"}>
                <CircleIcon boxSize={2} mt={"6px"} fill={"#3F3F3F"} />

                <Text color={"#3F3F3F"} fontSize={"15px"}>
                  Marginal costs
                </Text>
              </HStack>

              <HStack alignItems={"start"} w={"80%"}>
                <CircleIcon boxSize={2} mt={"6px"} fill={"#3F3F3F"} />

                <Text color={"#3F3F3F"} fontSize={"15px"}>
                  Daily reports including fees
                </Text>
              </HStack>
            </VStack>
          </VStack>
        </HStack>
      </Flex>
    );
  }

  function Offer() {
    return (
      <Flex
        flexDir={["column", "column", "row", "row", "row", "row"]}
        alignItems={"center"}
        py={"20%"}
        w={width}
      >
        <Box px={["7%", "7%", "7%", "7%", "7%", "7%"]} w={"full"}>
          <Flex
            alignItems={"center"}
            width={"full"}
            justifyContent={"space-between"}
            flexDir={["column", "column", "row", "row", "row", "row"]}
          >
            <VStack
              alignItems={"start"}
              id={"AG"}
              width={["100%", "100%", "62%", "62%", "40%", "40%"]}
            >
              <VStack
                spacing={["-5px", "-10px", "-10px", "-10px", "-10px", "-20px"]}
                alignItems={"start"}
              >
                <chakra.h3
                  fontFamily={"Poppins.black"}
                  fontSize={["28px", "40px", "40px", "40px", "25px", "60px"]}
                  fontWeight="black"
                  letterSpacing={{
                    base: "normal",
                    md: "normal",
                  }}
                  color="#3F3F3F"
                  whiteSpace={["normal", "normal", "pre-line", "pre-line"]}
                >
                  {`Safety, Security and Sustainability`}
                </chakra.h3>
              </VStack>

              <VStack alignItems={"start"} spacing={"30px"}>
                <Text
                  mb={6}
                  fontSize={["14px", "14px", "15px", "15px", "15px", "15px"]}
                  color="#3F3F3F"
                  whiteSpace={["normal", "normal", "pre-line", "pre-line"]}
                  fontFamily={"Poppins"}
                >
                  We value safety above all. This is why we think strategically
                  and act long term, meaning that all physical metals are stored
                  in only the best – secured vaults with selected banks and
                  bonded warehouses all over the world.
                </Text>
              </VStack>
            </VStack>
            <Spacer />
            <Box
              display={{
                base: "none",
                md: "flex",
              }}
              draggable={"false"}
              style={{
                userSelect: "none",
              }}
              w={"600px"}
              height={["60vh", "30vh", "30vh", "30vh", "50vh", "100vh"]}
            >
              <Image
                src={
                  "https://images.unsplash.com/photo-1582139329536-e7284fece509?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                }
                alt="ms"
                objectFit={"cover"}
                boxSize={"full"}
              />
            </Box>
          </Flex>

          <Flex
            alignItems={"center"}
            width={"full"}
            pt={["20", "60", "60", "60", "40", "40"]}
            justifyContent={"space-between"}
            flexDir={["column", "column", "row", "row", "row", "row"]}
          >
            <Box
              display={{
                base: "none",
                md: "flex",
              }}
              draggable={"false"}
              style={{
                userSelect: "none",
              }}
              w={"600px"}
              height={["60vh", "30vh", "30vh", "30vh", "50vh", "100vh"]}
            >
              <Image
                src={
                  "https://images.unsplash.com/photo-1535320903710-d993d3d77d29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                }
                alt="ms"
                objectFit={"cover"}
                boxSize={"full"}
              />
            </Box>

            <Spacer />
            <VStack
              alignItems={"start"}
              width={["100%", "100%", "62%", "62%", "40%", "40%"]}
            >
              <VStack
                spacing={["-5px", "-10px", "-10px", "-10px", "-10px", "-20px"]}
                alignItems={"start"}
              >
                <chakra.h3
                  fontFamily={"Poppins.black"}
                  fontSize={["28px", "40px", "40px", "40px", "25px", "60px"]}
                  fontWeight="black"
                  letterSpacing={{
                    base: "normal",
                    md: "normal",
                  }}
                  color="#3F3F3F"
                  whiteSpace={["normal", "normal", "pre-line", "pre-line"]}
                >
                  {`Market`}
                </chakra.h3>
              </VStack>

              <VStack alignItems={"start"} spacing={"30px"}>
                <Text
                  mb={6}
                  fontSize={["14px", "14px", "15px", "15px", "15px", "15px"]}
                  color="#3F3F3F"
                  whiteSpace={["normal", "normal", "pre-line", "pre-line"]}
                  fontFamily={"Poppins"}
                >
                  What is the world’s oldest, and still the most popular safe
                  haven for investors to stall funds? Indeed, it is gold. It has
                  been this way for thousands of years and will continue on this
                  path for many more years to come. Gold, in the long term, is
                  proven to be immune to geo-political instabilities, market
                  crashes, and any other imaginable collective negative
                  sentiment. In this first half of 2020, the world is
                  experiencing a crisis that no one in our lifetime has ever
                  experienced before. A global crisis like this is a trigger for
                  individuals to convert their assets into gold. Our team took
                  note of the events that recently took place, their economic
                  effects, and saw an sharp increase of high net-worth clients
                  that seeked consultations with the World Metal Reserve
                  regarding strategic decision-making, and to filter different
                  platforms available for purchasing gold.{" "}
                </Text>
              </VStack>
            </VStack>
          </Flex>

          <Flex
            alignItems={"center"}
            width={"full"}
            pt={["10", "10", "10", "10", "40", "40"]}
            justifyContent={"space-between"}
            flexDir={["column", "column", "row", "row", "row", "row"]}
          >
            <VStack
              alignItems={"start"}
              id={"AG"}
              width={["100%", "100%", "62%", "62%", "40%", "40%"]}
            >
              <VStack
                spacing={["-5px", "-10px", "-10px", "-10px", "-10px", "-20px"]}
                alignItems={"start"}
              >
                <chakra.h3
                  fontFamily={"Poppins.black"}
                  fontSize={["28px", "40px", "40px", "40px", "25px", "60px"]}
                  fontWeight="black"
                  letterSpacing={{
                    base: "normal",
                    md: "normal",
                  }}
                  color="#3F3F3F"
                  whiteSpace={["normal", "normal", "pre-line", "pre-line"]}
                >
                  {`Gold: An Investor’s Safe Haven`}
                </chakra.h3>
              </VStack>

              <VStack alignItems={"start"} spacing={"30px"}>
                <Text
                  mb={6}
                  fontSize={["14px", "14px", "15px", "15px", "15px", "15px"]}
                  color="#3F3F3F"
                  whiteSpace={["normal", "normal", "pre-line", "pre-line"]}
                  fontFamily={"Poppins"}
                >
                  {`For centuries, practical investors have been aware of the importance of gold as a long term investment. In addition to wealth diversification, gold has also been renowned to be a safe haven, offering historically proven and time-tested insurance, and protection against turbulent economic periods.

Gold is expected to rally gains this year, as investor demand continues to rise. This is partly induced by global fears of major economic crises. An example is the event wherein the United Kingdom officially left the European Union, known as Brexit, continues to add uncertainty in trading markets as crucial subjects are yet to be resolved; applying pressure on Pound Sterling. In conclusion, now may possibly be an ideal time to invest in gold bullion.`}
                </Text>
              </VStack>
            </VStack>
            <Spacer />
            <Box
              display={{
                base: "none",
                md: "flex",
              }}
              draggable={"false"}
              style={{
                userSelect: "none",
              }}
              w={"600px"}
              height={["60vh", "30vh", "30vh", "30vh", "50vh", "100vh"]}
            >
              <Image
                src={
                  "https://images.unsplash.com/photo-1610375461246-83df859d849d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Z29sZCUyMGJhcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
                }
                alt="ms"
                objectFit={"cover"}
                boxSize={"full"}
              />
            </Box>
          </Flex>

          <Flex
            alignItems={"center"}
            width={"full"}
            pt={["20", "60", "60", "60", "40", "40"]}
            justifyContent={"space-between"}
            flexDir={["column", "column", "row", "row", "row", "row"]}
          >
            <Box
              display={{
                base: "none",
                md: "flex",
              }}
              draggable={"false"}
              style={{
                userSelect: "none",
              }}
              w={"600px"}
              height={["60vh", "30vh", "30vh", "30vh", "50vh", "100vh"]}
            >
              <Image
                src={
                  "https://images.unsplash.com/photo-1609358905581-e5381612486e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmF1bHR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
                }
                alt="ms"
                objectFit={"cover"}
                boxSize={"full"}
              />
            </Box>

            <Spacer />
            <VStack
              alignItems={"start"}
              width={["100%", "100%", "62%", "62%", "40%", "40%"]}
            >
              <VStack
                spacing={["-5px", "-10px", "-10px", "-10px", "-10px", "-20px"]}
                alignItems={"start"}
              >
                <chakra.h3
                  fontFamily={"Poppins.black"}
                  fontSize={["28px", "40px", "40px", "40px", "25px", "60px"]}
                  fontWeight="black"
                  letterSpacing={{
                    base: "normal",
                    md: "normal",
                  }}
                  color="#3F3F3F"
                  whiteSpace={["normal", "normal", "pre-line", "pre-line"]}
                >
                  {`Safekeeping`}
                </chakra.h3>
              </VStack>

              <VStack alignItems={"start"} spacing={"30px"}>
                <Text
                  mb={6}
                  fontSize={["14px", "14px", "15px", "15px", "15px", "15px"]}
                  color="#3F3F3F"
                  whiteSpace={["normal", "normal", "pre-line", "pre-line"]}
                  fontFamily={"Poppins"}
                >
                  The practice of safekeeping is the storage of assets or other
                  items of value like gold, silver, and platinum in a
                  highly-secured area. Generally, individuals are inclined to
                  place their financial assets in proper safekeeping, and so
                  should you. To do so, you may use self-directed methods of
                  safekeeping or make use of the services provided by WMR. We
                  have direct access to the world’s renowned brokerages and
                  custodians. Each of them are legally responsible for all items
                  in safekeeping. Our direct custodians generally hold valuables
                  for investors while a depository can assume additional
                  control, liability, and responsibility for the aforementioned
                  items in storage.
                </Text>
              </VStack>
            </VStack>
          </Flex>

          <Flex
            alignItems={"center"}
            width={"full"}
            pt={["10", "10", "10", "10", "40", "40"]}
            justifyContent={"space-between"}
            flexDir={["column", "column", "row", "row", "row", "row"]}
          >
            <VStack
              alignItems={"start"}
              id={"AG"}
              width={["100%", "100%", "62%", "62%", "40%", "40%"]}
            >
              <VStack
                spacing={["-5px", "-10px", "-10px", "-10px", "-10px", "-20px"]}
                alignItems={"start"}
              >
                <chakra.h3
                  fontFamily={"Poppins.black"}
                  fontSize={["28px", "40px", "40px", "40px", "25px", "60px"]}
                  fontWeight="black"
                  letterSpacing={{
                    base: "normal",
                    md: "normal",
                  }}
                  color="#3F3F3F"
                  whiteSpace={["normal", "normal", "pre-line", "pre-line"]}
                >
                  {`Understanding Supply Chain
Protocols`}
                </chakra.h3>
              </VStack>

              <VStack alignItems={"start"} spacing={"30px"}>
                <Text
                  mb={6}
                  fontSize={["14px", "14px", "15px", "15px", "15px", "15px"]}
                  color="#3F3F3F"
                  whiteSpace={["normal", "normal", "pre-line", "pre-line"]}
                  fontFamily={"Poppins"}
                >
                  It is important to always fully understand and monitor the
                  supply chain protocols. This is the reason the World Metal
                  Reserve is actively exploring the groundbreaking opportunities
                  of blockchain technology where every single step in the supply
                  chain is to be recorded, spontaneously incapable of being
                  tampered with. Please ask us for more information if you are
                  interested; we are working with the world’s highest rated
                  blockchain companies and experts to get this on track for our
                  community.{" "}
                </Text>
              </VStack>
            </VStack>
            <Spacer />
            <Box
              display={{
                base: "none",
                md: "flex",
              }}
              draggable={"false"}
              style={{
                userSelect: "none",
              }}
              w={"600px"}
              height={["60vh", "30vh", "30vh", "30vh", "50vh", "100vh"]}
            >
              <Image
                src={
                  "https://images.unsplash.com/photo-1614028674026-a65e31bfd27c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                }
                alt="ms"
                objectFit={"cover"}
                boxSize={"full"}
              />
            </Box>
          </Flex>
        </Box>
      </Flex>
    );
  }

  function WeAt() {
    return (
      <Flex
        flexDir={["column", "column", "row", "row", "row", "row"]}
        alignItems={"center"}
        w={width}
      >
        <Box px={["7%", "7%", "7%", "7%", "7%", "7%"]} w={"full"}>
          <Text
            mb={6}
            fontSize={["14px", "14px", "15px", "15px", "28px", "15px"]}
            color="#3F3F3F"
            py={"20%"}
            textAlign={"center"}
            whiteSpace={["normal", "normal", "pre-line", "pre-line"]}
            fontFamily={"Poppins"}
          >
            We at WMR are old school gold experts; however, we embrace anything
            that adds value to your precious metal investments. We offer our
            members the opportunity to make their registrations even more
            personal and unique - your gold with your own personalized hallmark.
            There will never be another bullion anywhere in the world with the
            same hallmark. Register here and explore your opportunities to have
            your family name, guild, or other unique hallmark for your asset.
          </Text>
        </Box>
      </Flex>
    );
  }

  const CircleIcon = (props) => (
    <Icon viewBox="0 0 200 200" {...props}>
      <path
        fill="current"
        d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
      />
    </Icon>
  );

  function Privilege() {
    return (
      <Flex
        flexDir={["row", "column", "row", "row", "row", "row"]}
        height={["60vh", "30vh", "30vh", "30vh", "50vh", "100vh"]}
        bgColor={"#16365F"}
        alignItems={"end"}
        justifyContent={"start"}
      >
        <Box
          w={width}
          filter={"auto"}
          brightness={"40%"}
          height={["60vh", "30vh", "30vh", "30vh", "50vh", "100vh"]}
        >
          <Image
            src={
              "https://images.unsplash.com/photo-1565688842882-e0b2693d349a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
            }
            alt="wmr"
            objectFit={"cover"}
            boxSize={"full"}
          />
        </Box>
        <HStack
          position={"absolute"}
          alignSelf={"end"}
          alignItems={"center"}
          pb={["50px", "100px", "100px", "100px", "50px", "100px"]}
        >
          <VStack px={"5%"} alignItems={"start"}>
            <VStack spacing={[-2, -6, -6, -6, -5, -6]} alignItems={"start"}>
              <chakra.h3
                fontFamily={"Poppins.black"}
                fontSize={["28px", "40px", "40px", "40px", "25px", "60px"]}
                fontWeight="black"
                letterSpacing={{
                  base: "normal",
                  md: "normal",
                }}
                color="#FFFFFF"
                whiteSpace={["normal", "normal", "pre-line", "pre-line"]}
              >
                {`Members privilege exclusive`}
              </chakra.h3>
            </VStack>

            <chakra.p
              fontSize={["14px", "14px", "15px", "15px", "15px", "18px"]}
              color="#FFFFFF"
              fontWeight={"thin"}
              maxW={["90%", "70%", "70%", "70%", "80%", "70%"]}
              whiteSpace={["normal", "normal", "pre-line", "pre-line"]}
              fontFamily={"Poppins"}
            >
              {`WMR is rapidly setting the world’s standard for precious metals in. Why? Because we believe WMR exclusive members need more than just average market data and regulations which often are designed to serve selected financial institutions instead of keeping the needs and safety of investors in mind. We are here to give our respected members access to important markets and opportunities, anywhere in the world. In line with that we share essential information with our WMR exclusive members to being able to make responsible, well considered choices.`}
            </chakra.p>
          </VStack>
        </HStack>
      </Flex>
    );
  }

  function Billion() {
    return (
      <Flex
        flexDir={["row", "column", "row", "row", "row", "row"]}
        height={["60vh", "30vh", "30vh", "30vh", "100vh", "100vh"]}
        bgColor={"#16365F"}
        // mt={["20%", "2%", "2%", "2%", "10%", "10%"]}
        alignItems={"end"}
        justifyContent={"start"}
      >
        <Box
          w={width}
          filter={"auto"}
          brightness={"40%"}
          height={["60vh", "30vh", "30vh", "30vh", "100vh", "100vh"]}
        >
          <Image
            src={
              "https://images.unsplash.com/photo-1516738901171-8eb4fc13bd20?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
            }
            alt="wmr"
            objectFit={"cover"}
            boxSize={"full"}
          />
        </Box>
        <VStack
          position={"absolute"}
          alignSelf={"start"}
          alignItems={"start"}
          spacing={"300px"}
          px={"5%"}
        >
          <Box
            height={["50px", "50px", "50px", "50px", "50px", "50px"]}
            width={["150px", "220px", "50px", "50px", "150px", "250px"]}
          >
            <Image src={"mainlogo.png"} draggable="false" alt="gc icon png" />
          </Box>

          <VStack px={"2%"} alignItems={"start"}>
            <VStack spacing={[-2, -6, -6, -6, -5, -6]} alignItems={"start"}>
              <chakra.h3
                fontFamily={"Poppins.black"}
                fontSize={["28px", "40px", "40px", "40px", "25px", "60px"]}
                fontWeight="black"
                letterSpacing={{
                  base: "normal",
                  md: "normal",
                }}
                color="#FFFFFF"
                whiteSpace={["normal", "normal", "pre-line", "pre-line"]}
              >
                {`Members privilege exclusive`}
              </chakra.h3>
            </VStack>

            <chakra.p
              fontSize={["14px", "14px", "15px", "15px", "15px", "18px"]}
              color="#FFFFFF"
              fontWeight={"thin"}
              maxW={["90%", "70%", "70%", "70%", "80%", "70%"]}
              whiteSpace={["normal", "normal", "pre-line", "pre-line"]}
              fontFamily={"Poppins"}
            >
              {`WMR is rapidly setting the world’s standard for precious metals in. Why? Because we believe WMR exclusive members need more than just average market data and regulations which often are designed to serve selected financial institutions instead of keeping the needs and safety of investors in mind. We are here to give our respected members access to important markets and opportunities, anywhere in the world. In line with that we share essential information with our WMR exclusive members to being able to make responsible, well considered choices.`}
            </chakra.p>
          </VStack>
        </VStack>

        <chakra.p
          px={"7%"}
          py={"2%"}
          fontSize={["10px", "10px", "10px", "10px", "10px", "10px"]}
          color={"rgba(255, 255, 255, 0.8)"}
          position={"absolute"}
          alignSelf={"end"}
          fontFamily={"Poppins"}
        >
          © 2022 wmr & Partners B.V, All Rights Reserved.
        </chakra.p>
      </Flex>
    );
  }

  return (
    <MotionFlex
      initial={{ opacity: 0 }}
      animate={{ opacity: 100, delay: 1 }}
      transition={{ ease: "easeIn", duration: 10, delay: 1 }}
    >
      <Box bgColor={"#FCFAF0"}>
        <CallToAction />
        <Second />
        <Clearing />
        <Offer />
        <Privilege />
        <WeAt />

        <Billion />
      </Box>
    </MotionFlex>
  );
}
