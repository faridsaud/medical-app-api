import mongoose from 'mongoose';
import validator from 'validator';
import uuidv4 from 'uuid/v4';

const patientSchema = new mongoose.Schema({
  _id: {
    type: String,
    default: uuidv4,
    unique: true,
  },
  name: String,
  birth: {
    date: Date,
    country: String,
    city: String,
  },
  civilStatus: {
    type: String,
    enum: ['single', 'married'],
  },
  email: {
    type: String,
    validate: {
      validator: function(v) {
        return validator.isEmail(v);
      },
      message: props => `${props.value} is not a valid email!`,
    },
  },
  phoneNumber:  {
    type: String, lowercase: true, trim: true,
  },
  documentNumber:  {
    type: String, lowercase: true, trim: true,
  },
  occupation: {
    type: String, lowercase: true, trim: true,
  },
});

module.exports = mongoose.model('Patient', patientSchema);
