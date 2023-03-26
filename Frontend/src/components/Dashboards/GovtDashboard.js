import React from "react";
import { Link } from "react-router-dom";
import "./puppyfarm.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const GovtDashboard = () => {
  const navigate = useNavigate();
  const [info, setinfo] = useState([]);
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

  useEffect(() => {
    fetchDataHospital();
  }, []);
  const Logout = () => {
    localStorage.removeItem("gov_email");
    navigate("/");
  };
  const fetchData = async () => {
    const email = localStorage.getItem("vetname");
    const dat = { email };
    const res = await fetch("/api/govLogin/govFetch", {
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
            <button onClick={Logout}>Logout</button>
          </li>
        </ul>
      </nav>
      <div className="centraldivppd">
        <h1 id="pfhd">Government Dashboard</h1>
        <table>
          <tr>
            <th>Puppy-Farm Name</th>
            <th>Contact No.</th>
            <th> Address</th>
            <th>View Report</th>
          </tr>
          {info.map((item) => {
            return (
              <tr>
                <td>{item.name}</td>
                <td>{item.phone}</td>
                <td>{item.address}</td>
                <td>
                  <Link to={"/Report"}>
                    <button id="accept">view</button>{" "}
                  </Link>
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default GovtDashboard;
