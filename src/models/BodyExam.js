import mongoose from 'mongoose';
import validator from 'validator';
import uuidv4 from 'uuid/v4';

export const bodyExamSchema = new mongoose.Schema({
  _id: {
    type: String,
    default: uuidv4,
    unique: true,
  },
  owner: {type: String, ref: 'User'},
  weight: Number,
  bodyMassIndex: Number,
  size: Number,
  bodyFatPercentage: Number,
  bodyMusclePercentage: Number,
  waistCircumference: Number,
  hipCircumference: Number,
  bicepsCircumference: Number,
  quadricepsCircumference: Number,

  cellulitis: String,
  stretchMarks: Boolean,
  reticularVeins: Boolean,
  telangiectasia: Boolean,
  others: String,

});

export default mongoose.model('BodyExam', bodyExamSchema);
