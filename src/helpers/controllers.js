// External Dependancies
import boom from 'boom';
import {getUser} from '../utils/cookies';

export const getRESTfulControllerMethodsWithOwner = (Model, {plural, singular}) => ({
  [`get${plural}`]: async (req, reply) => {
    try {
      const {uuid: ownerUuid} = getUser(req);
      return await Model.find({owner: ownerUuid});
    } catch (err) {
      throw boom.boomify(err);
    }
  },
  [`get${singular}`]: async (req, reply) => {
    try {
      const {uuid} = req.params;
      const {uuid: ownerUuid} = getUser(req);
      return await Model.findOne({owner: ownerUuid, _id: uuid});
    } catch (err) {
      throw boom.boomify(err);
    }
  },
  [`add${singular}`]: async (req, reply) => {
    try {
      const {uuid: ownerUuid} = getUser(req);
      const model = new Model({...req.body, owner: ownerUuid});
      return model.save();
    } catch (err) {
      throw boom.boomify(err);
    }
  },
  [`update${singular}`]: async (req, reply) => {
    try {
      const {uuid} = req.params;
      const {uuid: ownerUuid} = getUser(req);
      return await Model.findOneAndUpdate({_id: uuid, owner: ownerUuid}, {...req.body}, {runValidators: true});
    } catch (err) {
      throw boom.boomify(err);
    }
  },
  [`delete${singular}`]: async (req, reply) => {
    try {
      const {uuid} = req.params;
      const {uuid: ownerUuid} = getUser(req);
      return await Model.findOneAndRemove({_id: uuid, owner: ownerUuid});
    } catch (err) {
      throw boom.boomify(err);
    }
  },
});

export const getRESTfulControllerMethods = (Model, {plural, singular}) => ({
  [`get${plural}`]: async (req, reply) => {
    try {
      return await Model.find();
    } catch (err) {
      throw boom.boomify(err);
    }
  },
  [`get${singular}`]: async (req, reply) => {
    try {
      const {uuid} = req.params;
      return await Model.findById(uuid);
    } catch (err) {
      throw boom.boomify(err);
    }
  },
  [`add${singular}`]: async (req, reply) => {
    try {
      const model = new Model(req.body);
      return model.save();
    } catch (err) {
      throw boom.boomify(err);
    }
  },
  [`update${singular}`]: async (req, reply) => {
    try {
      const {uuid} = req.params;
      const {...model} = req.body;
      return await Model.findByIdAndUpdate(uuid, model, {runValidators: true});
    } catch (err) {
      throw boom.boomify(err);
    }
  },
  [`delete${singular}`]: async (req, reply) => {
    try {
      const {uuid} = req.params;
      return await Model.findByIdAndRemove(uuid);
    } catch (err) {
      throw boom.boomify(err);
    }
  },
});
