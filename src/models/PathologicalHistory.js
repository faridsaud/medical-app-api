import mongoose from 'mongoose';
import validator from 'validator';
import uuidv4 from 'uuid/v4';

const pathologicalHistorySchema = new mongoose.Schema({
  _id: {
    type: String,
    default: uuidv4,
    unique: true,
  },
  owner: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  personal: String,
  family: String,
  allergic: String,
  surgical: String,
  hospital: String,
});

module.exports = mongoose.model('PathologicalHistory', pathologicalHistorySchema);
