import React, { useEffect } from "react";
import { useState } from "react";
// import "../CSS/Signup.css";
// import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  useToast,
  VStack,
  InputLeftAddon,
} from "@chakra-ui/react";

export default function Register(props) {
  //   const navigate = useNavigate();

  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setphone] = useState("");
  const [address, setaddress] = useState("");
  const [pincode, setpincode] = useState("");
  const [show, setShow] = useState(false);
  const [cpassword, setCpassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      name === "" ||
      email === "" ||
      password === "" ||
      phone === "" ||
      address === "" ||
      pincode === ""
    ) {
      return;
    } else {
      const data = { name, email, address, pincode, phone, password };

      const res = await fetch("/api/puppyFarm/register", {
        method: "POST",
        headers: {
          //always use this
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const check = await res.json();

      if (check.success) {
        alert("success");

        setname("");
        setPassword("");
        setphone("");
        setemail("");
        setaddress("");
        setpincode("");
        // setTimeout(() => {
        //   navigate("/Login");
        // }, 3000);
      } else {
        setname("");
        setPassword("");
        setphone("");
        setemail("");
        setaddress("");
        setpincode("");
      }
    }
  };

  const toast = useToast();

  const handleClick = (e) => {
    if (e.target.name === "showpass") {
      setShow(!show);
    }
  };

  return (
    <>
      <VStack spacing="5px" color="black">
        <FormControl isRequired>
          <FormLabel>Name</FormLabel>
          <Input
            placeholder="Enter Your Name"
            value={name}
            name="name"
            onChange={(e) => setname(e.target.value)}
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>e-mail</FormLabel>
          <Input
            type="email"
            placeholder="Enter Your e-mail"
            value={email}
            name="email"
            onChange={(e) => setemail(e.target.value)}
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>address</FormLabel>
          <Input
            type="text"
            placeholder="Enter Your address"
            value={address}
            name="address"
            onChange={(e) => setaddress(e.target.value)}
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Pincode</FormLabel>
          <Input
            type="number"
            placeholder="Enter Your pincode"
            value={pincode}
            name="pincode"
            onChange={(e) => setpincode(e.target.value)}
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>PhoneNo</FormLabel>
          <InputGroup>
            <InputLeftAddon children="+91" />
            <Input
              type="tel"
              placeholder="Enter Your phone no."
              value={phone}
              name="phone"
              onChange={(e) => setphone(e.target.value)}
            />
          </InputGroup>
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Password</FormLabel>
          <InputGroup>
            <Input
              placeholder="Enter password"
              value={password}
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              type={show ? "text" : "password"}
            />
            <InputRightElement width="4.5rem">
              <Button
                h="1.75rem"
                size="sm"
                name="showpass"
                onClick={handleClick}
              >
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Confirm Password</FormLabel>
          <InputGroup>
            <Input
              placeholder="Re-enter password"
              value={cpassword}
              name="cpassword"
              onChange={(e) => setCpassword(e.target.value)}
              type={show ? "text" : "password"}
            />
            <InputRightElement width="4.5rem">
              <Button
                h="1.75rem"
                size="sm"
                name="showpass"
                onClick={handleClick}
              >
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>

        <Button
          colorScheme={"blue"}
          width="100%"
          style={{ marginTop: 15 }}
          onClick={handleSubmit}
        >
          Signup
        </Button>
      </VStack>
    </>
  );
}
