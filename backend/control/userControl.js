const User = require('../models/user');

// Register User
const registerUser = async (req, res) => {
    try {
        const { name, username, email, password } = req.body;
        
        const newUser = new User({ name, username, email, password });
        await newUser.save();
        res.status(201).json({ message: 'User registered successfully!', user: newUser });
        //if not necessary then idk but gotta return after user logsin
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// to get back all the user data
const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = { registerUser, getUsers };
