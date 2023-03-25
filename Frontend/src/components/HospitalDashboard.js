import React from 'react'
import { useEffect } from 'react'


const HospitalDashboard = () => {
    const fetchDataHospital=async()=>{
      const email = localStorage.getItem("hospitalId")
      const dat = { email }
      const res = await fetch("/api/govLogin/fetchHospitalData", {
        method: "POST",
        headers: {
          //always use this
          "content-type": "application/json",
        },
        body: JSON.stringify(dat),
      });
  
      const check = await res.json();
      console.log(check.data)
    }

    useEffect(() => {
      fetchDataHospital();
    }, [])
    const accept=()=>{
      
    }
    const decline=()=>{

    }
  return (
    <div>
      {/* code for render list from above api ..dutta do it */}
      <button onClick={accept}>Accept</button>
      <button onClick={decline}>Decline</button>

    </div>
  )
}

export default HospitalDashboard