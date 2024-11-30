import Vehicle from '../moduleDBs/vehicle.js';

// for adding of new vehicle
const addVehicle = async (req, res) => {
    try {
        const vehicle = await Vehicle.create(req.body);
        res.status(201).json({
            success: true,
            data: vehicle,
            message: "Vehicle added successfully"
        });
    } catch (error) {
        console.error("Error adding vehicle:", error);
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

export default addVehicle;