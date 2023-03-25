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
    const accept=async()=>{
      const email=localStorage.getItem("petParentEmail")
      const data={email}
      const res = await fetch("/api/petParent/accept", {
        method: "POST",
        headers: { 
          //always use this
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      });
  
      const check = await res.json();
      console.log(check)
    }
    const decline=async()=>{
      const email=localStorage.getItem("petParentEmail")
      const data={email}
      const res = await fetch("/api/petParent/decline", {
        method: "POST",
        headers: { 
          //always use this
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      });
  
      const check = await res.json();
      console.log(check)
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