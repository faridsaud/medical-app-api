import mongoose from 'mongoose';
import validator from 'validator';
import uuidv4 from 'uuid/v4';
import {faceExamSchema} from './FaceExam'
import {bodyExamSchema} from './BodyExam'

export const physicalExamSchema = new mongoose.Schema({
  _id: {
    type: String,
    default: uuidv4,
    unique: true,
  },
  owner: {type: String, ref: 'User'},
  hair: String,
  implantationLine: String,
  faceExam: faceExamSchema,
  bodyExam: bodyExamSchema,
});

export default mongoose.model('PhysicalExam', physicalExamSchema);
