import React, { useEffect } from "react";
import { useState } from "react";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  VStack,
} from "@chakra-ui/react";
// import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";

export default function GovLogin(props) {
  //   useEffect(() => {
  //     props.stopLoading();
  //   }, [])

    const navigate = useNavigate();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [show, setShow] = useState(false);

  const handleClick = (e) => {
    if (e.target.name === "showpass") {
      setShow(!show);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = { email, password };
    if (email.length === 0 || password.length === 0) {
      return;
    }
    const res = await fetch("/api/govLogin/login", {
      method: "POST",
      headers: {
        //always use this
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const check = await res.json();

    if (check.success) {
      localStorage.setItem("email", email);
      setemail("");
      setpassword("");
      setTimeout(() => {
        navigate("/govDashboard")
      }, 1500);
      alert("Sign In Completed");
    } else if (!check.success) {
      console.log("Login Failed");
      setemail("");
      setpassword("");
    }
  };

  return (
    <>
      <VStack spacing="5px" color="black">
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
          <FormLabel>Password</FormLabel>
          <InputGroup>
            <Input
              placeholder="Enter password"
              value={password}
              name="password"
              onChange={(e) => setpassword(e.target.value)}
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
          Login
        </Button>
      </VStack>
    </>
  );
}
