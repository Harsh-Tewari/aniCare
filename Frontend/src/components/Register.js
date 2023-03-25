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
  Container,
  Box,
  Text,
} from "@chakra-ui/react";
import axios from "axios";

export default function Register(props) {
  //   const navigate = useNavigate();

  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [phone, setphone] = useState("");
  const [address, setaddress] = useState("");
  const [pincode, setpincode] = useState("");
  const [pic, setPic] = useState();
  const [picLoading, setPicLoading] = useState(false);
  //   const [cpassword, setcpassword] = useState("");

  const handleClick = async (e) => {
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
        setpassword("");
        setphone("");
        setemail("");
        setaddress("");
        setpincode("");
        // setTimeout(() => {
        //   navigate("/Login");
        // }, 3000);
      } else {
        setname("");
        setpassword("");
        setphone("");
        setemail("");
        setaddress("");
        setpincode("");
      }
    }
  };

  const onChange = (req) => {
    if (req.target.name === "name") {
      setname(req.target.value);
    } else if (req.target.name === "email") {
      setemail(req.target.value);
    } else if (req.target.name === "password") {
      setpassword(req.target.value);
    } else if (req.target.name === "address") {
      setaddress(req.target.value);
    } else if (req.target.name === "pincode") {
      setpincode(req.target.value);
    } else if (req.target.name === "phone") {
      setphone(req.target.value);
    }
  };

  const toast = useToast();

  const postDetails = (pics) => {
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
    if (pics.type === "application/pdf" || pics.type === "image/jpeg") {
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
  };

  const handleSubmit = async () => {
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
  };

  return (
    <>
      <div className="text-center">
        <main className="form-signin w-100 m-auto">
          <form method="post" onSubmit={handleClick}>
            {/* <img className="mb-1" src={logo} alt="" width="240" height="140" /> */}
            {/* <h1 className="h3 mb-3 fw-normal">Please sign in</h1> */}
            <div className="form-floating">
              <input
                type="text"
                className="form-control"
                value={name}
                id="name"
                name="name"
                placeholder="Enter your name"
                onChange={onChange}
              />
              <label htmlFor="floatingName">Name</label>
            </div>
            <div className="form-floating">
              <input
                type="email"
                className="form-control"
                value={email}
                id="email"
                name="email"
                placeholder="name@example.com"
                onChange={onChange}
              />
              <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating">
              <input
                type="password"
                className="form-control"
                value={password}
                id="password"
                name="password"
                placeholder="Password"
                onChange={onChange}
              />
              <label htmlFor="floatingPassword">Password</label>
            </div>
            <div className="form-floating">
              <input
                type="address"
                className="form-control"
                value={address}
                id="cpassword"
                name="address"
                placeholder="address"
                onChange={onChange}
              />
              <label htmlFor="floatingConfirmPassword"> address </label>
            </div>
            <div className="form-floating">
              <input
                type="text"
                className="form-control"
                value={pincode}
                id="pincode"
                name="pincode"
                placeholder="pincode"
                onChange={onChange}
              />
              <label htmlFor="floatingConfirmPassword"> pincode </label>
            </div>
            <div className="form-floating">
              <input
                type="text"
                className="form-control"
                value={phone}
                id="phone"
                name="phone"
                placeholder="phone"
                onChange={onChange}
              />
              <label htmlFor="floatingConfirmPassword"> phone </label>
            </div>
            <button className="w-100 btn btn-lg btn-dark" type="submit">
              Sign up
            </button>
            <span>Back to </span>
            {/* <Link className="sign-in-link" to={"/"}>
              Home Page
            </Link> */}
            <p className="mt-5 mb-3 text-muted">&copy;2022</p>
            <span>Already a user? </span>
            {/* <Link className="sign-in-link" to={"/Login"}> */}
            Sign in
            {/* </Link> */}
          </form>
        </main>
      </div>
      <Container maxW="xl" centerContent>
        <Box
          d="flex"
          p={3}
          bg={"seagreen"}
          color={"white"}
          w="100%"
          m="40px 0 15px 0"
          borderRadius={"lg"}
          borderWidth="1px"
        >
          <Text fontSize={"4xl"}> AniCare</Text>
        </Box>
        <VStack spacing="5px" color="black">
          <FormControl>
            <FormLabel>Profile Picture</FormLabel>
            <Input
              type="file"
              placeholder="Upload"
              name="email"
              p={1.5}
              onChange={(e) => postDetails(e.target.files[0])}
            />
          </FormControl>

          <Button
            colorScheme={"blue"}
            width="100%"
            style={{ marginTop: 15 }}
            onClick={handleSubmit}
            isLoading={picLoading}
          >
            Signup
          </Button>
        </VStack>
      </Container>
    </>
  );
}
