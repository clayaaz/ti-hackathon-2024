import mongoose from 'mongoose';

const vehicleSchema = new mongoose.Schema({
    name: { type: String, required: true },
    number_plate: { type: String, required: true },
    phone_number: { type: String, required: true },
    size: { type: String, required: true },
    price: { type: Number, required: true },
    type: { type: String, required: true },
    sub_type: String,
    image_url: { type: String, required: true },
    condition: { type: String, required: true }
}, {
    timestamps: true
});

const Vehicle = mongoose.model('Vehicle', vehicleSchema);

export default Vehicle;
