import {
  Box,
  Container,
  Image,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Login from "../Authentication/Login.js";
import Signup from "../Authentication/Register.js";
import "./petParentLogin.css";

const PetParentLogin = () => {
  return (
    <div id="pplogin">
      <Container maxW="xl">
        <Box display="flex" justifyContent="center" p={3} w="100%" bg="#f2fff7">
          <img
            src="https://res.cloudinary.com/dhg0kwh9c/image/upload/v1679721782/logo-removebg-preview1_jq1ybw.png"
            alt=""
          />
        </Box>
        <Box p={4} w="100%" bg="white">
          <Tabs isFitted variant="soft-rounded">
            <TabList>
              <Tab _hover={{ bg: "rgb(240, 254, 240)" }}>Login</Tab>
              <Tab _hover={{ bg: "rgb(240, 254, 240)" }}>SignUp</Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <Login />
              </TabPanel>
              <TabPanel>
                <Signup />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Container>
    </div>
  );
};

export default PetParentLogin;
