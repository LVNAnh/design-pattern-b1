const User = require("../models/user.model");

const AddUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required!" });
    }

    const newUser = new User({ email, password });
    await newUser.save();

    res
      .status(201)
      .json({ message: "User created successfully!", user: newUser });
  } catch (error) {
    console.error("Error adding user:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const GetUser = async (req, res) => {
  try {
    const { id } = req.params;

    if (id) {
      const user = await User.findById(id);
      if (!user) {
        return res.status(404).json({ message: "User not found!" });
      }
      return res.status(200).json(user);
    }

    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = { AddUser, GetUser };
