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
  status: {
    type: String,
    default: "Draft"
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
  currency: {
    type: String
  },
  contract: {
    type: String,
  },
  company: {
    type: mongoose.ObjectId,
    ref: 'Company'
  }
},
{
  timestamps: true
});

const Offer = mongoose.models.Offer || mongoose.model('Offer', offerSchema);

export default Offer;