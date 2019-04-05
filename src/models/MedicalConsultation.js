import mongoose from 'mongoose';
import validator from 'validator';
import uuidv4 from 'uuid/v4';
import {physicalExamSchema} from './PhysicalExam'

const medicalConsultationSchema = new mongoose.Schema({
  _id: {
    type: String,
    default: uuidv4,
    unique: true,
  },
  owner: {type: String, ref: 'User'},
  clinicHistory: {type: String, ref: 'ClinicHistory'},
  reason: String,
  currentIllness: String,
  physicalExam: physicalExamSchema,
  diagnosis: String,
  treatmentPlan: String,
  indications: String,
  complementaryExam: String,
  observations: String,
});

module.exports = mongoose.model('MedicalConsultation', medicalConsultationSchema);
