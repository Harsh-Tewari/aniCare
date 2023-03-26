import React from "react";
import { Link } from "react-router-dom";
import "./puppyfarm.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NewBreeding from "../inputcomps/NewBreeding";
import NewPuppy from "../inputcomps/NewPuppy";
const PuppyFarmDashboard = () => {
  const navigate = useNavigate();
  const [info, setinfo] = useState([]);
  const [info1, setinfo1] = useState([]);
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);

  const handleClick = (e) => {
    console.log(show);
    if (e.target.name === "showpass") {
      setShow(!show);
    } else if (e.target.name === "showform") {
      setShow1(!show1);
    }
  };
  const fetchData = async () => {
    const email = localStorage.getItem("farm_email");
    const dat = { email };
    const res = await fetch("/api/puppyFarm/fetch", {
      method: "POST",
      headers: {
        //always use this
        "content-type": "application/json",
      },
      body: JSON.stringify(dat),
    });

    const check = await res.json();
    console.log(check.data);
    setinfo(check.data);
    console.log(info);
  };

  const fetchData1 = async () => {
    const email = localStorage.getItem("farm_email");
    const dat = { email };
    const res = await fetch("/api/puppyFarm/fetchBreedingDetails", {
      method: "POST",
      headers: {
        //always use this
        "content-type": "application/json",
      },
      body: JSON.stringify(dat),
    });

    const check = await res.json();
    console.log(check);
    setinfo1(check.data);
    console.log(info);
  };

  useEffect(() => {
    fetchData();
    fetchData1();
  }, []);
  const Logout = () => {
    localStorage.removeItem("farm_email");
    navigate("/");
  };

  return (
    <div id="ppd">
      <nav>
        <img
          src="https://res.cloudinary.com/dhg0kwh9c/image/upload/v1679721782/logo-removebg-preview1_jq1ybw.png"
          alt=""
          className="navimg"
        />
        <ul id="farmul">
          <li>
            <button onClick={Logout}>Logout</button>
          </li>
        </ul>
      </nav>
      <div className="centraldivppd">
        <h1 id="pfhd">FarmName's Dashboard</h1>
        <h1>Information Of Pets</h1>
        <table>
          <tr>
            <th>Breed</th>
            <th>Gender</th>
            <th>Is Breeding</th>
            <th>PetId</th>
          </tr>
          {info.map((item) => {
            return (
              <tr>
                <td>{item.breed}</td>
                <td>{item.gender}</td>
                <td>{item.isBreeding ? "yes" : "no"}</td>
                <td>{item.id}</td>
              </tr>
            );
          })}
        </table>
        <button name="showform" id="addpt" onClick={handleClick}>
          Add Pet +
        </button>
        <br />
        {show1 && <NewPuppy />}

        <h1>Breeding Information</h1>
        <table>
          <tr>
            <th>Male Pet ID</th>
            <th>Female Pet ID</th>
            <th>Certificate Number</th>
            <th>Certificate Expiry Date</th>
            <th>View Certificate</th>
          </tr>
          {info1.map((item) => {
            return (
              <tr>
                <td>{item.maleId}</td>
                <td>{item.femaleId}</td>
                <td>{item.breedId}</td>
                <td>{item.dateOfexpiry}</td>
                <td>
                  <a href={item.certificate}>
                    <button className="view">view</button>
                  </a>
                </td>
              </tr>
            );
          })}
        </table>
        <button name="showpass" id="addpt" onClick={handleClick}>
          Add Breeding Details +
        </button>
        <br />
        {show ? <NewBreeding /> : <br />}
      </div>
    </div>
  );
};

export default PuppyFarmDashboard;
