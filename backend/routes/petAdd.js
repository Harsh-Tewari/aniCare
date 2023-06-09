const express = require("express");
const router = express.Router();
const Pet = require("../schema/pet");

router.post("/add", async (req, res) => {
  let { name, age, gender, lastVaccination, parentId } = req.body;

  if (!name || !parentId || !gender) {
    res.status(400);
    throw new Error("Please enter complete details");
  }
  let petExists = await Pet.findOne({ name, gender, parentId });
  if (petExists) {
    res.status(400).json({ success: false, message: "pet already exist" });
    return;
  }
  let prescription = "";
  let pet = await Pet.create({
    name,
    age,
    gender,
    prescription,
    lastVaccination,
    parentId,
  });
  if (pet) {
    res.status(200).json({ success: true });
  } else {
    res.status(400);
    throw new Error("Unable to create user");
  }
});

router.get("/vaccine", async (req, res) => {
  let { name, gender, parentId } = req.body;
  let dog = await Pet.findOne({ name, gender, parentId });
  if (dog) {
    console.log(dog);
    res.status(200).json({
      success: true,
      lastVaccineDate: dog.lastVaccination,
    });
  } else {
    res.status(400).send("Dog Not Found");
  }
});

router.post("/docupload", async (req, res) => {
  let { email, ln } = req.body;
  console.log("ln ", ln);
  // const str = ln.pic;
  // console.log("link ", str);
  let dog = await Pet.findOneAndUpdate({
    parentId: email,
    prescription: ln,
  });
  if (dog) {
    console.log(dog);
    res.status(200).json({
      success: true,
    });
  } else {
    res.status(400).send("Dog Not Found");
  }
});

module.exports = router;
