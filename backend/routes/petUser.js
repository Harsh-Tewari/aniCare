const express = require("express");
const router = express.Router();
const petUser = require("../schema/petParent");
const bcrypt = require("bcrypt");
const petAdd = require("../schema/pet");
const petParent = require("../schema/petParent");

router.post("/register", async (req, res) => {
  const email = req.body.email;
  const name = req.body.name;
  const address = req.body.address;
  const pincode = req.body.address;
  const phone = req.body.phone;
  const password = await bcrypt.hash(req.body.password, 10);
  const check = await petUser.findOne({ email: email });
  if (check) {
    return res
      .status(200)
      .json({ success: false, error: "username already exist" });
  } else {
    const user = await petUser.create({
      name: name,
      email: email,
      address: address,
      pincode: pincode,
      phone: phone,
      password: password,
    });
    return res.status(200).json({ success: true });
  }
});
router.post("/signIn", async (req, res) => {
  const checkEmail = req.body.email;
  // email=checkEmail;
  const person = await petUser.findOne({ email: checkEmail });

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
router.post("/fetch", async (req, res) => {
  const email = req.body.email;
  const parent = await petAdd.find({ parentId: email });
  if (!parent) {
    res
      .status(400)
      .json({ success: false, message: "pet parent doesnot exist" });
  } else {
    res.status(200).json({ data: parent });
  }
});
router.post("/fetchParent", async (req, res) => {
  const email = req.body.email;
  const parent = await petParent.findOne({ email: email });
  if (!parent) {
    res
      .status(400)
      .json({ success: false, message: "pet parent doesnot exist" });
  } else {
    res.status(200).json({ data: parent });
  }
});
router.post("/book", async (req, res) => {
  const email = req.body.email;
  const hospitalBooked = req.body.hospitalBooked;
  await petUser.findOneAndUpdate({
    parentId: email,
    hospitalBooked: hospitalBooked,
  });
  await petUser.findOneAndUpdate({ parentId: email, bookingStatus: "pending" });
  res.status(200).json({ success: true, message: "hospitalBooked" });
});
router.post("/fetchHospital", async (req, res) => {
  const hospital = req.body.hospital;
  const data = await petUser.find({ hospitalBooked: hospital });
  res.status(200).json({ success: true, data: data });
});
router.post("/accept", async (req, res) => {
  const email = req.body.email;
  await petUser.findOneAndUpdate({ email: email, bookingStatus: "accepted" });
  res.status(200).json({ success: true, message: "appointment accepted" });
});
router.post("/decline", async (req, res) => {
  const email = req.body.email;
  await petUser.findOneAndUpdate({ email: email, bookingStatus: "declined" });
  res.status(200).json({ success: true, message: "appointment declined" });
});
module.exports = router;
