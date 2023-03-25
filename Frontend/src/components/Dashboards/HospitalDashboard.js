import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./puppyfarm.css";
import { useEffect, useState } from "react";

const HospitalDashboard = () => {
  const [info, setinfo] = useState([]);
  const navigate=useNavigate();
  const fetchDataHospital = async () => {
    const email = localStorage.getItem("hospitalId");
    const dat = { email };
    const res = await fetch("/api/govLogin/fetchHospitalData", {
      method: "POST",
      headers: {
        //always use this
        "content-type": "application/json",
      },
      body: JSON.stringify(dat),
    });

    const check = await res.json();
    console.log(check.data);
  };
  const Logout=()=>{
    localStorage.removeItem("vetname")
    navigate("/")
  }
  useEffect(() => {
    fetchDataHospital();
  }, []);
  const accept = async () => {
    const email = localStorage.getItem("petParentEmail");
    const data = { email };
    const res = await fetch("/api/petParent/accept", {
      method: "POST",
      headers: {
        //always use this
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const check = await res.json();
    console.log(check);
  };
  const decline = async () => {
    const email = localStorage.getItem("petParentEmail");
    const data = { email };
    const res = await fetch("/api/petParent/decline", {
      method: "POST",
      headers: {
        //always use this
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const check = await res.json();
    console.log(check);
  };

  const fetchData = async () => {
    const email = localStorage.getItem("vetname");
    const dat = { email };
    const res = await fetch("/api/govLogin/fetchHospitalData", {
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
  useEffect(() => {
    fetchData();
  }, []);

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
          <button onClick={Logout}>
              Logout
            </button>
          </li>
        </ul>
      </nav>
      <div className="centraldivppd">
        <h1 id="pfhd">Hospital Dashboard</h1>
        <table>
          <tr>
            <th>Breed</th>
            <th>Contact No.</th>
            <th>Parent Name</th>
            <th>Approval</th>
          </tr>
          {info.map((item) => {
            return (
              <tr>
                <td>{item.breed}</td>
                <td>{item.phone}</td>
                <td>{item.name}</td>
                <td>
                  <div className="poop">
                    <button type="submit" onClick={accept} id="accept">
                      accept
                    </button>{" "}
                    <button type="reset" onClick={decline} id="decline">
                      decline
                    </button>{" "}
                  </div>
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default HospitalDashboard;
