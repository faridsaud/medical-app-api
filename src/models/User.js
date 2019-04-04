import mongoose from 'mongoose';
import validator from 'validator';
import uuidv4 from 'uuid/v4';
import bcrypt from 'bcrypt';

const userSchema = new mongoose.Schema({
  _id: {
    type: String,
    default: uuidv4,
    unique: true,
  },
  email: {
    type: String,
    lowercase: true,
    trim: true,
    required: true,
    validate: {
      validator: function(email) {
        return validator.isEmail(email);
      },
      message: props => `${props.value} is not a valid phone number!`
    },
  },
  password: {
    type: String,
    required: true,
  },
});

userSchema.pre('save', function(next) {
  try {
    bcrypt.hash(this.password, 10, (err, hash) => {
      console.log({hash});
      this.password = hash;
      console.log({password: this.password});
      next();
    });
  }catch (e) {
    next(e);
  }
});

userSchema.pre('update', function(next) {
  try {
    bcrypt.hash(this.password, 10, (err, hash) => {
      console.log({hash});
      this.password = hash;
      console.log({password: this.password});
    });
  }catch (e) {
    next(e);
  }
});
module.exports = mongoose.model('User', userSchema);
