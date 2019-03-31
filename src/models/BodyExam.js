import mongoose from 'mongoose';
import validator from 'validator';
import uuidv4 from 'uuid/v4';

const bodyExamSchema = new mongoose.Schema({
  _id: {
    type: String,
    default: uuidv4,
    unique: true,
  },
  weight: Number,
  size: String,
  bodyMassIndex: String,
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

module.exports = mongoose.model('BodyExam', bodyExamSchema);
