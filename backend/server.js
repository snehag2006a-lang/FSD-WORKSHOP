const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcryptjs");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());


mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected Successfully");
  })
  .catch((error) => {
    console.log("MongoDB Connection Error:");
    console.log(error);
  });



const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
    },
  },

  {
    timestamps: true,
  }
);


const User = mongoose.model("User", userSchema);


app.post("/api/signup", async (req, res) => {

  try {

    const { name, email, password } = req.body;


    
    const existingUser = await User.findOne({
      email,
    });


    if (existingUser) {

      return res.status(400).json({
        message: "Email already registered",
      });

    }


    
    const hashedPassword =
      await bcrypt.hash(password, 10);


    
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });


    await newUser.save();


    res.status(201).json({
      message: "Signup successful!",
    });

  }

  catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Signup failed",
    });

  }

});

app.post("/api/signin", async (req, res) => {

  try {

    const { email, password } = req.body;
    const user = await User.findOne({
      email,
    });


    if (!user) {

      return res.status(400).json({
        message: "User not found",
      });

    }
    const passwordMatch =
      await bcrypt.compare(
        password,
        user.password
      );


    if (!passwordMatch) {

      return res.status(400).json({
        message: "Invalid email or password",
      });

    }


    res.json({
      message: `Welcome ${user.name}!`,
    });

  }

  catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Sign in failed",
    });

  }

});

app.get("/", (req, res) => {

  res.send("Backend is working!");

});

const PORT = 5000;

app.listen(PORT, () => {

  console.log(
    `Server running on http://localhost:${PORT}`
  );

});