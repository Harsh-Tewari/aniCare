import { Link } from "react-router-dom";
import "./petParentDAshboard.css";
import { useEffect, useState } from "react";
export default function PetParentDashboard() {
  const [info, setinfo] = useState([]);
  const [pic, setPic] = useState("");
  const [name, setname] = useState("");
  const [doct, setdoct] = useState("");
  const fetchData = async () => {
    const email = localStorage.getItem("petParentEmail");
    const dat = { email };
    const res = await fetch("/api/petParent/fetch", {
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
  };
  const fetchParent = async () => {
    const email = localStorage.getItem("petParentEmail");
    const dat = { email };
    const res = await fetch("/api/petParent/fetchParent", {
      method: "POST",
      headers: {
        //always use this
        "content-type": "application/json",
      },
      body: JSON.stringify(dat),
    });

    const check = await res.json();

    setname(check.data.name);
  };

  const fetchAppointments = async () => {
    const email = localStorage.getItem("petParentEmail");
    const dat = { email };
    const res = await fetch("/api/govLogin/appointRequest", {
      method: "POST",
      headers: {
        //always use this
        "content-type": "application/json",
      },
      body: JSON.stringify(dat),
    });

    const check = await res.json();

    setdoct(check);
  };
  useEffect(() => {
    fetchData();
    fetchParent();
    fetchAppointments();
  }, []);

  const add = async () => {
    const email = localStorage.getItem("petParentEmail");
    const dat = { email };
    const res = await fetch("/api/pet/add", {
      method: "POST",
      headers: {
        //always use this
        "content-type": "application/json",
      },
      body: JSON.stringify(dat),
    });

    const check = await res.json();
  };
  //prescriptipon

  const updatepresc = async (ln) => {
    const email = localStorage.getItem("petParentEmail");
    const dat = { email, ln };
    const res = await fetch("/api/pet/docupload", {
      method: "POST",
      headers: {
        //always use this
        "content-type": "application/json",
      },
      body: JSON.stringify(dat),
    });

    const check = await res.json();
    console.log(check);
  };

  const postDetails = (pics) => {
    if (pics === undefined) {
      alert("choose a document");
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
          updatepresc(pic);
        })
        .catch((err) => {
          console.log(err);
        });
      console.log("link mil gayi");
    } else {
      alert("please select valid doc");
      return;
    }
  };
  return (
    <div id="ppd">
      <nav>
        <img
          src="https://res.cloudinary.com/dhg0kwh9c/image/upload/v1679721782/logo-removebg-preview1_jq1ybw.png"
          alt=""
          class="navimg"
        />
        <ul>
          <li>
            <a href="/" target="_blank">
              Vaccination Appointment
            </a>
          </li>
          <li>
            <a href="/" target="_blank">
              Schedule Check-up
            </a>
          </li>
        </ul>
      </nav>
      <div className="centraldivppd">
        <h1 id="ppdh1">Welcome, {name}</h1>
        <table>
          <tr>
            <th>Pet Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Last vaccination</th>
            <th>View Prescription</th>
            <th>Upload Prescription</th>
          </tr>
          {info.map((item) => {
            return (
              <tr>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.gender}</td>
                <td>{item.lastVaccination}</td>
                <td>
                  <a href={item.prescription}>
                    <button className="view">view</button>
                  </a>
                </td>
                <td>
                  <input
                    type="file"
                    name="pres"
                    onChange={(e) => postDetails(e.target.files[0])}
                  />
                </td>
              </tr>
            );
          })}
        </table>
        <button type="submit" id="addpt" onClick={add}>
          Add Pet +
        </button>
        <table>
          <tr>
            <th>Hospital</th>
            <th>Appointment Status</th>
          </tr>
          {doct.map((item) => {
            return (
              <tr>
                <td>{item.hospitalBooked}</td>
                <td>{item.bookingStatus}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
}
