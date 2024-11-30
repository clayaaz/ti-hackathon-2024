import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/database.js';
import addVehicle from './control/addVehicle.js';
import Vehicle from './moduleDBs/vehicle.js';
import cors from 'cors';

dotenv.config();
connectDB();

const app = express();
app.use(cors());  // Add this before your routes
app.use(express.json());


// Routes
app.get('/api/vehicles', async(req,res) => {
    try {
        const vehicle = await Vehicle.find({});
        res.status(200).json({success:true, data:vehicle});
    } catch (error) {
        console.log("error in fetching product")
        res.status(500).json({success:false, message:"server error"})
    }
    
}); 
app.post('/api/vehicles', addVehicle);
// not made yet

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port 5000`));


