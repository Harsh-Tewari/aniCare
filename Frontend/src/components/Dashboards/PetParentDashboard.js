import { Link, useNavigate } from "react-router-dom";
import "./petParentDAshboard.css";
import { useEffect, useState } from "react";
import NewPet from "../inputcomps/NewPet";
export default function PetParentDashboard() {
  const [info, setinfo] = useState([]);
  const [pic, setPic] = useState("");
  const [name, setname] = useState("");
  const [pname, setpname] = useState("");
  const [doct, setdoct] = useState([]);
  const [show, setShow] = useState(false);

  const handleClick = (e) => {
    console.log(show);
    if (e.target.name === "showpass") {
      setShow(!show);
    }
  };
  const navigate = useNavigate();
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
  const Logout = () => {
    localStorage.removeItem("farm_email");
    navigate("/");
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

    setpname(check.data.name);
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
    console.log(check.data);
    setdoct(check.data);
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
    console.log("ln hai ", ln);
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
    if (check.success) {
      alert("uploaded!");
    }
  };
  const rate = async (event, hospitalName) => {
    // let a=document.getElementById("rating")
    console.log(hospitalName)
    const element = event.currentTarget;
    var parent = element.parentNode;
    var hospitalBooked = parent.querySelector("input");
    const rating = hospitalBooked.value;
    const dat = { hospitalName, rating };
    const res = await fetch("/api/govLogin/rateHospital", {
      method: "POST",
      headers: {
        //always use this
        "content-type": "application/json", 
      },
      body: JSON.stringify(dat),
    });
    const check = await res.json();
    console.log(check);
    if (check.success) {
      alert("Ratings Provided Successfully!");
    }
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
          const ln = data.url.toString();
          setPic(ln);
          console.log(ln);
          updatepresc(ln);
        })
        .catch((err) => {
          console.log(err);
        });
      console.log("uploading...");
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
            <Link to={"/hospitalList"}>Schedule Appointment</Link>
          </li>
          <li>
            <button onClick={Logout}>Logout</button>
          </li>
        </ul>
      </nav>
      <div className="centraldivppd">
        <h1 id="ppdh1">Welcome, {pname}</h1>
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
        <button name="showpass" id="addpt" onClick={handleClick}>
          Add Pet +
        </button>
        <br />
        {show ? <NewPet /> : <br />}
        <table>
          <tr>
            <th>Hospital</th>
            <th>Appointment Status</th>
            <th>Provide Rating</th>
          </tr>

          {doct.map((item) => {
            return (
              <tr>
                <td>{item.hospitalBooked}</td>
                <td>{item.bookingStatus}</td>
                <input
                  type="text"
                  id="rating"
                  placeholder="rating between 1-5"
                />
                <button
                  className="ratebut"
                  onClick={(event) => {
                    rate(event, item.hospitalBooked);
                  }}
                >
                  Rate
                </button>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
}
