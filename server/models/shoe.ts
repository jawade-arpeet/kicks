import mongoose from "mongoose";

const shoeModel = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  imgURL: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const Shoe = mongoose.model("shoe", shoeModel);

export default Shoe;
