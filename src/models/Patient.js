import mongoose from 'mongoose';
import validator from 'validator';
import uuidv4 from 'uuid/v4';

export const patientSchema = new mongoose.Schema({
  _id: {
    type: String,
    default: uuidv4,
    unique: true,
  },
  owner: {type: String, ref: 'User'},
  firstName: String,
  lastName: String,
  birthDate: Date,
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
  placeOfResidence: {
    city: {
      type: String, lowercase: true, trim: true,
    },
    country: {
      type: String, lowercase: true, trim: true,
    },
    address: {
      type: String, lowercase: true, trim: true,
    }
  },
});

export default mongoose.model('Patient', patientSchema);
