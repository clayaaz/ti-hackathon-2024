const Vehicle = require('../models/vehicle');

// for adding of new vehicle
const addVehicle = async (req, res) => {
    try {
        const { phone_no, number_plate, size, price, type, sub_type } = req.body;

        const newVehicle = new Vehicle({
            phone_no,
            number_plate,
            size,
            price,
            type,
            sub_type,
        });

        await newVehicle.save();
        res.status(201).json({ message: 'Vehicle added successfully!', vehicle: newVehicle });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
