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

const NewPuppy = () => {
  const navigate = useNavigate();
  const [gender, setgender] = useState("");
  const [breed, setbreed] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = localStorage.getItem("farm_email");
    if (email === "" || breed === "" || gender === "") {
      return;
    } else {
      const data = { email, breed, gender };

      const res = await fetch("/api/puppyFarm/add", {
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

        setbreed("");
        setgender("");
        // setTimeout(() => {
        //   navigate("/Login");
        // }, 3000);
      } else {
        setbreed("");
        setgender("");
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
          <FormLabel>PetBreed</FormLabel>
          <Input
            type="text"
            placeholder="Enter Your Pet's Breed"
            value={breed}
            name="breed"
            onChange={(e) => setbreed(e.target.value)}
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>PetGender</FormLabel>
          <Input
            type="text"
            placeholder="Enter Your Pet's gender"
            value={gender}
            name="gender"
            onChange={(e) => setgender(e.target.value)}
          />
        </FormControl>

        <Button
          colorScheme={"blue"}
          width="100%"
          style={{ marginTop: 15 }}
          onClick={handleSubmit}
        >
          Add
        </Button>
      </VStack>
    </Box>
  );
};

export default NewPuppy;
