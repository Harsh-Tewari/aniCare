import {
  Box,
  Flex,
  Text,
  IconButton,
  Image,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import "./petParentDAshboard.css";
import { useEffect, useState } from "react"
export default function PetParentDashboard() {
  const { isOpen, onToggle } = useDisclosure();
  const [info, setinfo] = useState([])
  const fetchData = async () => {
    const email = localStorage.getItem("petParentEmail")
    const dat = { email }
    const res = await fetch("/api/petParent/fetch", {
      method: "POST",
      headers: {
        //always use this
        "content-type": "application/json",
      },
      body: JSON.stringify(dat),
    });

    const check = await res.json();
    console.log(check.data)
    setinfo(check.data)
  }
  useEffect(() => {
    fetchData();

  }, [])
  // const renderlist =




  return (
    <div id="ppd">

      <img src="https://res.cloudinary.com/dhg0kwh9c/image/upload/v1679721782/logo-removebg-preview1_jq1ybw.png" alt="" />
      <div className="centraldivppd">
        <h1 id="ppdh1">Welcome, Pet Parent</h1>
        <table>
          <tr>
            <th>Pet Name</th>
            <th>Pet Id</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Breed</th>
            <th>Last Prescription</th>
          </tr>
          {info.map((item)=>{
              return <tr>{item.name}<td>{item.gender}</td></tr>
          })}
        </table>
      </div>
    </div>
  );
}
