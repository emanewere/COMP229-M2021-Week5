import mongoose from 'mongoose';
const Schema = mongoose.Schema; //alias for Mongoose Schema
const clothingSchema = new Schema
({
    Name: String,
    Brand: String,
    Category: String,
    Colour: String,
    Size: String,
    Price: Number
},
{
    collection: 'clothing'
});

const Model = Mongoose.model("Clothing",clothingSchema );
export default Model;

