import { Box } from "@chakra-ui/react";

import { chakra } from "@chakra-ui/react";
import { Footer } from "../constants/components/utilities/";

import { useEffect, useState } from "react";
import HomePage from "./home";
import { startUpStore } from "../store/start_up";
import { MotionFlex } from "../constants/components/motion";

export default function Home() {
  return (
    <Box width={"full"} height={"full"}>
      <HomePage />
    </Box>
  );
}
