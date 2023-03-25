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
      const data = { name, email, password, address, pincode, phone };

      const res = await fetch("/api/petParent/register", {
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

  {
    /*const postDetails = (pics) => {
    setPicLoading(true);
    if (pics === undefined) {
      toast({
        title: "Please Select a Document!",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "top-left",
      });
      setPicLoading(false);
      return;
    }
    console.log(pics);
    if (
      pics.type === "application/pdf" ||
      pics.type === "image/jpeg" ||
      pics.type === "image/jpg" ||
      pics.type === "image/png"
    ) {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "aniCare");
      data.append("cloud_name", "dhg0kwh9c");
      fetch("https://api.cloudinary.com/v1_1/dhg0kwh9c/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          setPic(data.url.toString());
          console.log(data.url.toString());
          setPicLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setPicLoading(false);
        });
    } else {
      toast({
        title: "Please Select an Image!",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "top-left",
      });
      setPicLoading(false);
      return;
    }
  };*/
  }

  {
    /*const handleSubmit = async () => {
    setPicLoading(true);
    if (!name || !email || !password || !password) {
      toast({
        title: "Please fill all the fields!",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "top-left",
      });
      setPicLoading(false);
      return;
    }

    if (password !== password) {
      toast({
        title: "Passwords Do Not Match!",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top-left",
      });
      setPicLoading(false);
      return;
    }

    try {
      const config = { headers: { "content-type": "application/json" } };
      const { data } = await axios.post(
        "/api/user",
        { name, email, password, pic },
        config
      );
      setPicLoading(false);
    } catch (error) {
      setPicLoading(false);
      return;
    }
  };*/
  }
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
