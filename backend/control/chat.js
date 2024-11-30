// Import required modules
import express from 'express'
const http = require('http');
const { Server } = require('socket.io');
import mongoose from 'mongoose'

// Initialize Express app and server
const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Middleware for parsing JSON (if needed)
app.use(express.json());

// Connect to MongoDB
const mongoURI = "mongodb://localhost:27017/yourDatabase"; // Replace thiss 

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB!');
});

// MongoDB User Schema
const UserSchema = new mongoose.Schema({
  username: String,
  phoneNumber: String, // change these
});
const User = mongoose.model('User', UserSchema);

// Endpoint to fetch user details 
app.get('/user/:username', async (req, res) => {
  try {
    const user = await User.findOne({ username: req.params.username });
    if (!user) return res.status(404).send('User not found');
    res.json(user);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

// Real-Time Chat using Socket.IO
io.on('connection', (socket) => {
  console.log('A user connected:', socket.id);

  // Event: Join a chat room
  socket.on('joinRoom', (room) => {
    socket.join(room);
    console.log(`User joined room: ${room}`);
  });

  // Event: Handle chat messages
  socket.on('chatMessage', (data) => {
    const { room, message } = data;
    io.to(room).emit('message', message); // Broadcast message to the room
    console.log(`Message sent to room ${room}: ${message}`);
  });

  // Handle disconnection
  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });
});

// Example: Static call button route
app.get('/call/:username', async (req, res) => {
  try {
    const user = await User.findOne({ username: req.params.username });
    if (!user) return res.status(404).send('User not found');
    const phoneNumber = user.phoneNumber;
    // phone number chai config
    
    res.send(`<a href="tel:${phoneNumber}">Call ${user.username}</a>`);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

// Start the server
const PORT = 5000; // confugire the port
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
