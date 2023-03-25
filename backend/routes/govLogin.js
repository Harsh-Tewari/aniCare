const express = require("express");
const router = express.Router();
const govLogin = require("../schema/govLogin");
const bcrypt = require("bcrypt");


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
// router.post("/fetch",async(req,res)=>{
//   const data=
// })
module.exports=router