import User from "../models/UserModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import validator from "validator";
//import { use } from "bcrypt/promises.js";

//Login User


const loginUser = async (req, res) => {
  try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });

      if (!user) {
          return res.status(400).json({ success: false, message: "User not found." });
      }

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
          return res.status(400).json({ success: false, message: "Invalid password." });
      }

      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

      res.json({
          success: true,
          user: {
              _id: user._id,
              name: user.name,
              email: user.email,
          },
          token,
      });
  } catch (error) {
      res.status(500).json({ success: false, message: "Server error." });
  }
};


//Register User
const registerUser = async (req, res) => {
  const { name, password, email } = req.body;
  try {
    //Check user already exists
    const exists = await User.findOne({ email });
    if (exists) {
      return res.json({ success: false, message: "Already Exists" });
    }
    //validate email and password
    if (!validator.isEmail(email)) {
      return res.json({
        success: false,
        message: "Please Enter a Valid Email",
      });
    }

    if (password.length < 8) {
      return res.json({ success: false, message: "Enter a strong Password" });
    }

    //Hashing user password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new User({
      name: name,
      email: email,
      password: hashedPassword,
    });

    const user = await newUser.save();
    const token = createToken(user._id);
    res.json({ success: true, token });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

export { loginUser, registerUser };
