const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.registerUser = async (req, res) => {
   const { name, email, password, role } = req.body;
   const hashedPassword = await bcrypt.hash(password, 10);

   try {
       const newUser = new User({ name, email, password: hashedPassword, role });
       await newUser.save();
       res.json({ message: "User registered successfully" });
   } catch (error) {
       res.status(500).json({ error: "Server error" });
   }
};
