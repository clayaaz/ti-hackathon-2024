import userSchema from '../moduleDBs/user.js';
// Register User
const registerUser = async (req, res) => {
    try {
        const { name, username, email, password } = req.body;
        
        const newUser = new userSchema({ name, username, email, password });
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
        const users = await userSchema.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log('Login attempt for:', email);

        // Find user by email
        const users = await userSchema.find();
        console.log('All users:', users); // Debug log

        const user = await userSchema.findOne({ email });
        
        if (!user) {
            return res.status(401).json({ 
                success: false,
                error: 'Invalid email or password' 
            });
        }
        
        // Simple password comparison
        if (password !== user.password) {
            return res.status(401).json({ 
                success: false,
                error: 'Invalid email or password' 
            });
        }
        
        const userResponse = {
            id: user._id,
            name: user.name,
            email: user.email,
            username: user.username
        };
        
        res.status(200).json({ 
            success: true,
            user: userResponse,
            message: 'Login successful' 
        });
    } catch (err) {
        console.error('Login error:', err);
        res.status(500).json({ 
            success: false,
            error: 'Server error during login' 
        });
    }
};

export { registerUser, getUsers, loginUser };
