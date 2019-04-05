import mongoose from 'mongoose';
import validator from 'validator';
import uuidv4 from 'uuid/v4';

export const pathologicalHistorySchema = new mongoose.Schema({
  _id: {
    type: String,
    default: uuidv4,
    unique: true,
  },
  owner: {type: String, ref: 'User'},
  personal: String,
  family: String,
  allergic: String,
  surgical: String,
  hospital: String,
});

export default mongoose.model('PathologicalHistory', pathologicalHistorySchema);
