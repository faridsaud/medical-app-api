import uuidv4 from 'uuid/v4';

const mongoose = require('mongoose');
const validator = require('validator');

const clinicHistorySchema = new mongoose.Schema({
  _id: {
    type: String,
    default: uuidv4,
    unique: true,
  },
  owner: {type: String, ref: 'User'},
  patient: {type: mongoose.Schema.Types.ObjectId, ref: 'Patient'},
  pathologicalHistory: {type: mongoose.Schema.Types.ObjectId, ref: 'PathologicalHistory'},
  nonPathologicalHistory: {type: mongoose.Schema.Types.ObjectId, ref: 'NonPathologicalHistory'},
  medicalConsultations: [{type: mongoose.Schema.Types.ObjectId, ref: 'MedicalConsultation'}],
});

module.exports = mongoose.model('ClinicHistory', clinicHistorySchema);
