const mongoose = require('mongoose');

const vehicleSchema = new mongoose.Schema({
    phone_no: { type: String, required: true },
    number_plate: { type: String, required: true, unique: true },
    size: { type: String, required: true },
    price_per_day: { type: Number, required: true }, 
    type_vec: { type: String, enum: ['car', 'bike', 'van', 'bus'], required: true },
    sub_type: { type: String, required: true }, // suv hatbak sedan ig??
    img: { type: String, required: true }, // yo chai timi haru config gara idk
});

module.exports = mongoose.model('Vehicle', vehicleSchema);