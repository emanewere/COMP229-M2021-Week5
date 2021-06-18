import mongoose from 'mongoose';
const Schema = mongoose.Schema; //alias for Mongoose Schema
const clothingSchema = new Schema
({
    name: String,
    brand: String,
    category: String,
    colour: String,
    size: String,
    price: Number
},
{
    collection: 'clothing'
});

const Model = mongoose.model("Clothing",clothingSchema );
export default Model;

