import React, { useEffect } from "react";
import { useState } from "react";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Box,
  VStack,
} from "@chakra-ui/react";
// import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";

const NewBreeding = () => {
  const navigate = useNavigate();
  const [pic, setpic] = useState("");
  const [edate, setedate] = useState("");
  const [cert, setcert] = useState("");
  const [fid, setfid] = useState("");
  const [mid, setmid] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (mid === "" || fid === "" || cert === "" || edate === "") {
      return;
    } else {
      const breedId = cert;
      const maleId = mid;
      const femaleId = fid;
      const dateOfExpiry = edate;
      const data = { maleId, femaleId, dateOfExpiry, breedId };

      const res = await fetch("/api/puppyFarm/breed", {
        method: "POST",
        headers: {
          //always use this
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const check = await res.json();
      console.log(check);
      if (check.success) {
        alert("success");

        setcert("");
        setedate("");
        setfid("");
        setmid("");
        // setTimeout(() => {
        //   navigate("/Login");
        // }, 3000);
      } else {
        setcert("");
        setedate("");
        setfid("");
        setmid("");
      }
    }
  };

  return (
    <Box
      w="40vw"
      p={4}
      m="30px 0 0 0"
      bg={"white"}
      borderRadius="lg"
      borderWidth="2px"
      borderColor={"rgb(38, 162, 16)"}
    >
      <VStack spacing="5px" color="black">
        <FormControl isRequired>
          <FormLabel>Male Pet ID</FormLabel>
          <Input
            type="text"
            placeholder="Enter Male Pet's Id"
            value={mid}
            name="mid"
            onChange={(e) => setmid(e.target.value)}
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Female Pet ID</FormLabel>
          <Input
            type="text"
            placeholder="Enter Female Pet's Id"
            value={fid}
            name="fid"
            onChange={(e) => setfid(e.target.value)}
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Certificate No.</FormLabel>
          <Input
            type="text"
            placeholder="Enter certificate id"
            value={cert}
            name="cert"
            onChange={(e) => setcert(e.target.value)}
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Certificate Expiry</FormLabel>
          <Input
            type="text"
            placeholder="Enter certificate Expiry"
            value={edate}
            name="edate"
            onChange={(e) => setedate(e.target.value)}
          />
        </FormControl>

        <Button
          colorScheme={"blue"}
          width="100%"
          style={{ marginTop: 15 }}
          onClick={handleSubmit}
        >
          Breed
        </Button>
      </VStack>
    </Box>
  );
};

export default NewBreeding;
