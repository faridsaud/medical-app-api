import uuidv4 from 'uuid/v4';
import {patientSchema} from './Patient';
import {pathologicalHistorySchema} from './PathologicalHistory';
import {nonPathologicalHistorySchema} from './NonPathologicalHistory';

const mongoose = require('mongoose');
const validator = require('validator');

const clinicHistorySchema = new mongoose.Schema({
  _id: {
    type: String,
    default: uuidv4,
    unique: true,
  },
  owner: {type: String, ref: 'User'},
  patient: patientSchema,
  pathologicalHistory: pathologicalHistorySchema,
  nonPathologicalHistory: nonPathologicalHistorySchema,
  medicalConsultations: [{type: mongoose.Schema.Types.Object, ref: 'MedicalConsultation'}],
});

module.exports = mongoose.model('ClinicHistory', clinicHistorySchema);
