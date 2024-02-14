import mongoose from "mongoose";

const companySchema = mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Must provide an email'],
    unique: [true, 'Must be unique'],
  },
  password: {
    type: String,
    required: [true, 'Must provide a password'],
  },
  companyName: {
    type: String,
    required: [true, 'Must provide a company name'],
  },
  companyAddress: {
    type: String,
  },
  description: {
    type: String,
  },
  logo: {
    type: String,
  }
},
{
  timestamps: true
});

const Company = mongoose.models.Company || mongoose.model('Company', companySchema);

export default Company;