const express = require("express");
const router = express.Router();
const puppyUser = require("../schema/puppyUser");
const puppyFarmAdd=require("../schema/puppyFarmAdd")
const puppyBreed=require("../schema/puppyBreed")
const bcrypt = require("bcrypt");


router.post("/register", async (req, res) => {
    const email=req.body.email;
    const name=req.body.name;
    const address=req.body.address;
    const pincode=req.body.address;
    const phone =req.body.phone;
    const password= await bcrypt.hash(req.body.password, 10);
    const check=await puppyUser.findOne({email:email})
    if(check){
        return res.status(200) .json({ success: false, error: "Puupy farm already exist already exist" });
    }
    else{
        const user =await puppyUser.create({
            name:name,
            email:email,
            address:address,
            pincode:pincode,
            phone:phone,
            password:password
    })
    return res.status(200).json({success:true,})
}
});


router.post("/signIn", async (req, res) => {
    const checkEmail = req.body.email;
    // email=checkEmail;
    const person = await puppyUser.findOne({ email: checkEmail });
  
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
});
router.post("/add",async(req,res)=>{
  const email=req.body.email;
  const id=Date.now();
  const breed=req.body.breed;
  const gender=req.body.gender;
  const certificate=req.body.certificate
  const isBreeding=0;
  const count=0;
  const checkEmail=await puppyUser.findOne({email:email})
  if(!checkEmail){
    res.status(400).json({success:false})
  }
  else{
      const add=await puppyFarmAdd.create({
        email:email,
        breed:breed,
        gender:gender,
        certificate:certificate,
        isBreeding:isBreeding,
        count:count,
        id:id
      })
      return res.status(200).json({success:true})
  }
})

router.post("/fetch",async(req,res)=>{
  const email=req.body.email;
 const user= await puppyUser.findOne({email:email});
 if(!user){res.status(400).json({success:false})}
 else{
  const data=await puppyFarmAdd.find({email:email})
  res.status(200).json({success:true,data:data})
 }
})

router.post("/breed",async(req,res)=>{
  const email=req.body.email;
 const user= await puppyUser.findOne({email:email});
  // console.log(user)
  const maleId=req.body.maleId;
  const femaleId=req.body.femaleId;
  const dateOfExpiry=req.body.dateOfExpiry;
const breedId=req.body.breedId;
  if(!user){res.status(400).json({success:false,message:"user not exist"})}
  else{
      let countMale=await puppyFarmAdd.findOne({id:maleId})
      console.log(countMale )
      if(!countMale.count){
        countMale=1;
      }
      else{
      countMale=parseInt(countMale.count);}
      let countFemale=await puppyFarmAdd.findOne({id:femaleId})
      if(!countFemale.count){
        countFemale=1; 
      }
      else{
      countFemale=parseInt(countFemale.count)}
      await puppyFarmAdd.findOneAndUpdate({id:maleId,isBreeding:true,count:countMale+1,breedId:breedId});
      await puppyFarmAdd.findOneAndUpdate({id:femaleId,isBreeding:true,count:countFemale+1,breedId:breedId});
      res.status(200).json({success:true,message:"breeding done and count updated"})
  }
})
router.post("/fetchBreedingDetails",async(req,res)=>{
  const data=await puppyFarmAdd.find({breedId:"C123"})
  res.status(200).json({success:true,data:data})
})
module.exports = router;