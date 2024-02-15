import mongoose from "mongoose";

const offerSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, "Must provide a title"]
  },
  category: {
    type: String,
    required: [true, "Must provide a category"]
  },
  locations: {
    type: Array,
    required: [true, "Must provide a location"]
  },
  skills: {
    type: Array,
  },
  description: {
    type: String,
  },
  salary: {
    type: String,
  },
  company: {
    type: String
  }
});

const Offer = mongoose.models.Offer || mongoose.model('Offer', offerSchema);

export default Offer;