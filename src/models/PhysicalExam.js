import mongoose from 'mongoose';
import validator from 'validator';
import uuidv4 from 'uuid/v4';

const physicalExamSchema = new mongoose.Schema({
  _id: {
    type: String,
    default: uuidv4,
    unique: true,
  },
  owner: {type: String, ref: 'User'},
  hair: String,
  implantationLine: String,
  faceExam: {type: mongoose.Schema.Types.ObjectId, ref: 'FaceExam'},
  bodyExam: {type: mongoose.Schema.Types.ObjectId, ref: 'BodyExam'},
});

module.exports = mongoose.model('PhysicalExam', physicalExamSchema);
