const express = require("express");
const router = express.Router();
const govLogin = require("../schema/govLogin");
const bcrypt = require("bcrypt");
const hospitalLogin=require("../schema/hospitalLogin")
const petUser=require("../schema/petParent");
const puppyUser = require("../schema/puppyUser");
const petParent = require("../schema/petParent");

router.post("/register",async(req,res)=>{
    const email=req.body.email; 

    const password= await bcrypt.hash(req.body.password, 10);
    const check=await govLogin.findOne({email:email})
    if(check){
        return res.status(200) .json({ success: false, error: "username already exist" });
    }
    else{
        const user =await govLogin.create({
            
            email:email,
        
            password:password
    })
    return res.status(200).json({success:true,})
}
})
router.post("/registerHospital",async(req,res)=>{
  const email=req.body.email; 

  const password= await bcrypt.hash(req.body.password, 10);
  const check=await govLogin.findOne({email:email})
  if(check){
      return res.status(200) .json({ success: false, error: "username already exist" });
  }
  else{
      const user =await hospitalLogin.create({
          
          email:email,
      
          password:password
  })
  return res.status(200).json({success:true,})
}
})
router.post("/login",async(req,res)=>{
    const checkEmail = req.body.email;
    // email=checkEmail;
    const person = await govLogin.findOne({ email: checkEmail });
  
    if (person) {
      const checkPassword = await bcrypt.compare(
        req.body.password,
        person.password
      ); 
      if (checkPassword) {
        res.status(200).json({ success: true });
      } else {
        res
          .status(200)
          .json({ success: false, error: "Email or password does not match" });
      }
    } else {
      res.status(200).json({ success: false, error: "User does not exist" });
    }
})

router.post("/govFetch",async(req,res)=>{
  let data=await puppyUser.find()
  res.status(200).json({success:true,data:data})
})
router.post("/HospitalLogin",async(req,res)=>{
  const checkEmail = req.body.email;
  // email=checkEmail;
  const person = await hospitalLogin.findOne({ email: checkEmail });

  if (person) {
    const checkPassword = await bcrypt.compare(
      req.body.password,
      person.password
    ); 
    if (checkPassword) {
      res.status(200).json({ success: true });
    } else {
      res
        .status(200)
        .json({ success: false, error: "Email or password does not match" });
    }
  } else {
    res.status(200).json({ success: false, error: "User does not exist" });
  }
})
router.post("/fetchHospitalData",async(req,res)=>{
  const checkEmail = req.body.email;
  
 
          const data=await petUser.find({hospitalBooked:checkEmail})
          res.status(200).json({success:true,data:data})
  
})
router.post("/appointRequest",async(req,res)=>{
  const email=req.body.email;
  const data=await petParent.find({email:email})
  res.status(200).json({success:true,hospitalBooked:data.hospitalBooked,bookingStatus:data.bookingStatus})
})
module.exports=router