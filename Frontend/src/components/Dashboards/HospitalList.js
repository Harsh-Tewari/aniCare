import React from 'react'

const HospitalList = () => {
    const hospital=[
        {
            name:"Renee Vet Hospital",
            services:"24 Hours Open, Pet grooming, Animal surgery, Pet shop, Dog food and nutrition",
            address:"No.30/31, 1st Floor, Kothanur Main Road, BK Circle, Jp Nagar 8th Phase, Bangalore - (Opp to HDFC Bank)",
            pincode:"560076",
            homeVisit:"Not Available",
            contact:"07942811609"
        },
        {
            name:"Pet Point",
            services:"Blood group test, Grooming, Tick bath, Annual Vaccination, Animal surgery, Pet treatment",
            address:"No 224, 4th A Cross, Jakkur Layout, Yelahanka, Bangalore - (Near Medplus Building)",
            pincode:"560064",
            homeVisit:"Available",
            contact:"08123037624"
        },
        {
            name:"Wagging Tail Pet Care",
            services:"Pet care, Veterinary physician, Pet treatment, Grooming, Pet boarding",
            address:"No.17, 17th E Cross, Indiranagar, Bangalore - (Next Kottakkal Arya Vaidyasala)",
            pincode:"560038",
            homeVisit:"Available",
            contact:"07942679982"
        },
        {
            name:"Cessna Lifeline Veterinary Hospital",
            services:"Urology, MRI scan, Tick bath, Endoscope, Gynecology, Dental care, De-Worming",
            address:"No. 148, Domlur, Bangalore - (Near Fiat Showroom, HCBS Amarjyothi Layout)",
            pincode:"560071",
            homeVisit:"Available",
            contact:"07676365365"
        },
        {
            name:"Sai Pet Clinic",
            services:"Regular health chekup, Pet grooming, Veterinary surgery soft tissue, Animal surgery",
            address:"No. 1216, 1st Block, Nanajappa Main Road, Vidyaranyapura, Bangalore - (Next to Apollo Clinic, Opposite Jodidar Club)",
            pincode:"560097",
            homeVisit:"Available",
            contact:"07947152449"
        },
        {
            name:"Krupa Pet Clinic",
            services:"24 Hours Open, Pet grooming, Animal surgery, Pet shop, Dog food and nutrition",
            address:"Bb Road, Yelahanka Old Town, Yelahanka, Bangalore - (Opp. Indian Motors)",
            pincode:"560064",
            homeVisit:"Not available",
            contact:"07947428275"
        },
        {
            name:"Indira Pet Clinic",
            services:"Pet shop, Veterinary pharmacy, Veterinary services, Veterinary surgery soft tissue",
            address:"No.39/6, 7th Mn, Hal 2nd STG, Indiranagar, Bangalore - (Nr Ambedkar College & Esi Hospital)",
            pincode:"560038",
            homeVisit:"Available",
            contact:"07942694837"
        },
        {
            name:"Sahana Veterinary Centre",
            services:"Blood group test, Grooming, Tick bath, Annual Vaccination, Pet treatment",
            address:"2nd Cross Road HMT Layout 6th Block, Vidyaranyapura Bengaluru, Karnataka",
            pincode:"560097",
            homeVisit:"Not available",
            contact:"09900146414"
        },
        {
            name:"Prakruthi Vet Hospital",
            services:"General check up, Veterinary services, Pet grooming",
            address:"No.38/27, 1st A Cross, 5th Blockk, Banashankari 3rd Stage, Bangalore - (Near Kamakya Theatre)",
            pincode:"560085",
            homeVisit:"Available",
            contact:"07947103186"
        },
        {
            name:"Shreyas Veterinary Clinic",
            services:"Emergency services, Veterinary pharmacy, Veterinary crematorium, Veterinary Dental Prophylaxis",
            address:"No 5, Anjanadri Plaza Basement, 4th Cross, Girinagar, Bangalore - (Near Canara Bank, Behind Radhakrishna Hospital)",
            pincode:"560085",
            homeVisit:"Available",
            contact:"07947146095"
        }
    ]
    const book=async(event)=>{
        const element=event.currentTarget;
        var parent =element.parentNode;
        var hospitalBooked=parent.querySelector("h1");
        const email=localStorage.getItem("petParentEmail")
        hospitalBooked=hospitalBooked.innerText
        
        const data={email,hospitalBooked}
        const res = await fetch("/api/petParent/book", {
            method: "POST",
            headers: {
              //always use this
              "content-type": "application/json",
            },
            body: JSON.stringify(data),
          });
      
          const check = await res.json();
          console.log(check);

    }
  return (
    <div>hospitalList
        {hospital.map((item)=>{
            return <div><h1>{item.name}</h1>
            <h2>{item.services}</h2>
            <h3>{item.address}</h3>
            <h4>{item.pincode}</h4>
            <button style={{backgroundColor:"red"} } onClick={(event)=>{book(event)}}>Book Now</button></div>
        })}


    </div>
  )
}

export default HospitalList