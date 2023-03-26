import React from "react";
import "./report.css";
const Report = () => {
  return (
    <div id="total">
      <div id="back">
        <div className="cont">
          <h1 id="ch">Report</h1>
        </div>
        <div className="det">
          <h1>No. Of Male Dogs:3</h1>
          <h1>No. Of Female Dogs:5</h1>
          <h1>No. Of Dogs Under Breeding Cycle:2</h1>
        </div>
        <h1 id="realjuice">Breeding Information</h1>
        <p>
          1. Male pet ID: A1<br></br>
          Female pet ID: A2<br></br>
          Certificate Number: 12345<br></br>
          Certificate Expiry: 23/5/23
        </p>
      </div>
    </div>
  );
};

export default Report;
