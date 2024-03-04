import mongoose from "mongoose";

const candidateSchema = mongoose.Schema({
  email: {
    type: String,
    required: [true, "Must provide an email"]
  },
  name: {
    type: String,
    required: [true, "Must provide a name"]
  },
  message: {
    type: String,
  },
  cv: {
    type: String,
  },
  unread: {
    type: Boolean,
    default: true
  },
  offer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Offer'
  },
  company: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Company'
  }
},
{
  timestamps: true
});

const Candidate = mongoose.models.Candidate || mongoose.model('Candidate', candidateSchema);

export default Candidate;