import React from "react";
import "./HomePage.css";

const Homepage = () => {
  return (
    <div>
      <nav id="navbar">
        <div id="logo">
          <img
            src="https://res.cloudinary.com/dhg0kwh9c/image/upload/v1679721782/logo-removebg-preview1_jq1ybw.png"
            alt=""
          />
        </div>
        <ul>
          <li className="item">
            <a href="#">Parent Login</a>
          </li>
          <li className="item">
            <a href="#">Puppy Farm Login</a>
          </li>
          <li className="item">
            <a href="#">Govt Login</a>
          </li>
        </ul>
      </nav>
      <section>
        <div id="home">
          <div id="text1">
            <h1>AniCare</h1>
            <p>Making pet parent`s lives easier and improving pet`s life.</p>
            <p>
              Schedule appointments for your loved ones' vaccinations and
              check-ups, as well as upload their prescriptions to AniCare, and
              eliminate the hassle of carrying prescriptions around.
            </p>
          </div>
          <div>
            <img
              src="https://res.cloudinary.com/dhg0kwh9c/image/upload/v1679750745/MacBook_Pro_16__-_2_n7ogew.png"
              alt=""
            />
          </div>
        </div>
      </section>
      <section id="about">
        <div>
          <h1>Why AniCare?</h1>
        </div>
        <div id="mid">
          <div className="services">
            <img
              src="https://res.cloudinary.com/dhg0kwh9c/image/upload/v1679750744/vacci_w8oy42.png"
              alt=""
            />
            <div id="heading">
              <h3>Book Vaccination appointments</h3>
            </div>
            <div className="para">
              <p>
                Like people, pets need vaccines. Book vaccination appointments
                for your loved ones from the comfort of your home.
              </p>
            </div>
          </div>
          <div className="services">
            <img
              src="https://res.cloudinary.com/dhg0kwh9c/image/upload/v1679750794/appoi_udqvvy.png"
              alt=""
            />
            <div id="heading">
              <h3>Schedule Regular Checkups</h3>
            </div>
            <div className="para">
              <p>
                Get your pet an appointment with a nearby hospital or clinic
                that is best suited to his or her needs.
              </p>
            </div>
          </div>
          <div className="services">
            <img
              src="https://res.cloudinary.com/dhg0kwh9c/image/upload/v1679750746/happy_parenting_z9sgua.png"
              alt=""
            />
            <div id="heading">
              <h3>Upload Presciption</h3>
            </div>
            <div className="para">
              <p>
                With AniCare, you can upload your pet's prescriptions and
                vaccination certificates and can access them any time.
              </p>
            </div>
          </div>
          <div className="services">
            <img
              src="https://res.cloudinary.com/dhg0kwh9c/image/upload/v1679750746/happy_parenting_z9sgua.png"
              alt=""
            />
            <div id="heading">
              <h3>Easy Parenting</h3>
            </div>
            <div className="para">
              <p>
                The mission of AniCare is to make pet ownership easier for pet
                parents who adopt the pets to give them a better life.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="third">
        <div>
          <img
            src="https://res.cloudinary.com/dhg0kwh9c/image/upload/v1679750745/MacBook_Pro_16__-_2_1_m4ioqv.png"
            alt=""
          />
        </div>
        <div id="pathak">
          <div id="foot">
            <h2>Why AniCare?</h2>
          </div>
          <div id="footp">
            <p>
              Unethical breeders give little to no concern about the welfare of
              animals. They breed dogs without considering the genetic traits
              they pass on to their offspring. As part of AniCare's goal, we aim
              to reduce this by collaborating with the Government to build a
              bridge between puppy farms and the government to ensure greater
              transparency between them.
            </p>
          </div>
        </div>
      </section>
      <section id="footer">
        <p>&copy;2023.All rights are reserved to Team Code Breakers.</p>
      </section>
    </div>
  );
};

export default Homepage;
