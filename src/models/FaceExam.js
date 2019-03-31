import mongoose from 'mongoose';
import validator from 'validator';
import uuidv4 from 'uuid/v4';

const faceExamSchema = new mongoose.Schema({
  _id: {
    type: String,
    default: uuidv4,
    unique: true,
  },
  wrinkles: String,
  volume: String,
  dyschromias: String,
  vascular: String,
  flaccidity: String,
  scars: String,
  skin: String,
  others: String,
});

module.exports = mongoose.model('FaceExam', faceExamSchema);
