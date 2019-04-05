import mongoose from 'mongoose';
import validator from 'validator';
import uuidv4 from 'uuid/v4';

export const faceExamSchema = new mongoose.Schema({
  _id: {
    type: String,
    default: uuidv4,
    unique: true,
  },
  owner: {type: String, ref: 'User'},
  wrinkles: String,
  volume: String,
  dyschromias: String,
  vascular: String,
  flaccidity: String,
  scars: String,
  skin: String,
  others: String,
});

export default mongoose.model('FaceExam', faceExamSchema);
