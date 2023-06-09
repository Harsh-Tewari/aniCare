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

const NewPet = () => {
  const navigate = useNavigate();
  const [name, setname] = useState("");
  const [age, setage] = useState("");
  const [gender, setgender] = useState("");
  const [breed, setbreed] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (name === "" || age === "" || gender === "") {
      return;
    } else {
      const vac = "";
      const parentId = localStorage.getItem("petParentEmail");
      const data = { name, age, gender, vac, parentId };

      const res = await fetch("/api/pet/add", {
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

        setname("");
        setage("");
        setgender("");
        // setTimeout(() => {
        //   navigate("/Login");
        // }, 3000);
      } else {
        setname("");
        setage("");
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
          <FormLabel>PetName</FormLabel>
          <Input
            type="text"
            placeholder="Enter Your Pet's name"
            value={name}
            name="name"
            onChange={(e) => setname(e.target.value)}
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>PetAge</FormLabel>
          <Input
            type="text"
            placeholder="Enter Your Pet's age"
            value={age}
            name="age"
            onChange={(e) => setage(e.target.value)}
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

export default NewPet;
