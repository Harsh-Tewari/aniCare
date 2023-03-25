import { Box, Container, Tabs, TabPanels, TabPanel } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import GovLogin from "../Authentication/GovLogin.js";
import "./GovLogin.css";

const GovSignin = () => {
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
          <h1 id="farmhead"> GOV LOGIN </h1>
          <Tabs isFitted variant="soft-rounded">
            <TabPanels>
              <TabPanel>
                <GovLogin />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Container>
    </div>
  );
};

export default GovSignin;
