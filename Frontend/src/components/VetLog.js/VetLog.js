import { Box, Container, Tabs, TabPanels, TabPanel } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import VetLogin from "../Authentication/VetLogin.js";
import "./VetLog.css";

const VetLog = () => {
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
          <h1 id="farmhead"> VET LOGIN </h1>
          <Tabs isFitted variant="soft-rounded">
            <TabPanels>
              <TabPanel>
                <VetLogin />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Container>
    </div>
  );
};

export default VetLog;
