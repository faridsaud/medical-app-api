import mongoose from 'mongoose';
import validator from 'validator';
import uuidv4 from 'uuid/v4';

const medicalConsultationSchema = new mongoose.Schema({
  _id: {
    type: String,
    default: uuidv4,
    unique: true,
  },
  reason: String,
  currentIllness: String,
  physicalExam: {type: mongoose.Schema.Types.ObjectId, ref: 'PhysicalExam'},
  diagnosis: String,
  treatmentPlan: String,
  indications: String,
  complementaryExam: String,
  observations: String,
});

module.exports = mongoose.model('MedicalConsultation', medicalConsultationSchema);
