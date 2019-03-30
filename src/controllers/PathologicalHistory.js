// External Dependancies
import boom from 'boom';

import PathologicalHistory from '../models/PathologicalHistory';

const getPathologicalHistories = async (req, reply) => {
  try {
    return await PathologicalHistory.find();
  } catch (err) {
    throw boom.boomify(err);
  }
};

const getPathologicalHistory = async (req, reply) => {
  try {
    const {uuid} = req.params;
    return await PathologicalHistory.findById(uuid);
  } catch (err) {
    throw boom.boomify(err);
  }
};

const addPathologicalHistory = async (req, reply) => {
  try {
    const pathologicalHistory = new PathologicalHistory(req.body);
    return pathologicalHistory.save();
  } catch (err) {
    throw boom.boomify(err);
  }
};

const updatePathologicalHistory = async (req, reply) => {
  try {
    const { uuid } = req.params;
    const {...pathologicalHistory} = req.body;
    return await PathologicalHistory.findByIdAndUpdate(uuid, pathologicalHistory, {new: true});
  } catch (err) {
    throw boom.boomify(err);
  }
};

const deletePathologicalHistory = async (req, reply) => {
  try {
    const { uuid } = req.params;
    return await PathologicalHistory.findByIdAndRemove(uuid);
  } catch (err) {
    throw boom.boomify(err);
  }
};


export default {
  getPathologicalHistory,
  getPathologicalHistories,
  addPathologicalHistory,
  deletePathologicalHistory,
  updatePathologicalHistory,
}
