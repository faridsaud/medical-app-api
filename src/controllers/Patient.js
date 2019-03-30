// External Dependancies
import boom from 'boom';

import Patient from '../models/Patient';

const getPatients = async (req, reply) => {
  try {
    return await Patient.find();
  } catch (err) {
    throw boom.boomify(err);
  }
};

const getPatient = async (req, reply) => {
  try {
    const {uuid} = req.params;
    console.log({uuid});
    return await Patient.findById(uuid);
  } catch (err) {
    throw boom.boomify(err);
  }
};

const addPatient = async (req, reply) => {
  try {
    const patient = new Patient(req.body);
    return patient.save();
  } catch (err) {
    throw boom.boomify(err);
  }
};

const updatePatient = async (req, reply) => {
  try {
    const { uuid } = req.params;
    const {...patient} = req.body;
    return await Patient.findByIdAndUpdate(uuid, patient, {new: true});
  } catch (err) {
    throw boom.boomify(err);
  }
};

const deletePatient = async (req, reply) => {
  try {
    const { uuid } = req.params;
    return await Patient.findByIdAndRemove(uuid);
  } catch (err) {
    throw boom.boomify(err);
  }
};


export default {
  getPatient,
  getPatients,
  addPatient,
  deletePatient,
  updatePatient,
}
