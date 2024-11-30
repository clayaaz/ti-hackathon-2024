import mongoose from 'mongoose';
const vehicleSchema = new mongoose.Schema({
    phone_no: { type: String, required: true },
    number_plate: { type: String, required: true, unique: true },
    size: { type: String, required: true },
    price: { type: Number, required: true }, 
    type: { type: String, enum: ['car', 'bike', 'van', 'bus'], required: true },
    sub_type: { type: String, required: false }, // suv hatbak sedan ig??
    img: { type: String, required: true }, // yo chai timi haru config gara idk
    user_id: {type: String, require: false}
});

const Vehicle = mongoose.model('Vehicle', vehicleSchema);

export default Vehicle;
