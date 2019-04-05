import ClinicHistory from '../models/ClinicHistory';
import MedicalConsultation from '../models/MedicalConsultation';
import {getRESTfulControllerMethodsWithOwner} from '../helpers/controllers';
import {getUser} from '../utils/cookies';
import boom from 'boom';

export default {
  ...getRESTfulControllerMethodsWithOwner(ClinicHistory, {singular: 'ClinicHistory', plural: 'ClinicHistories'}),
  getClinicHistory: async (req, reply) => {
    try {
      console.log('getClinicHistory');
      const {uuid} = req.params;
      const {uuid: ownerUuid} = getUser(req);
      const clinicHistory =  await ClinicHistory.findOne({owner: ownerUuid, _id: uuid});
      clinicHistory.medicalConsultations = await MedicalConsultation.find({clinicHistory: uuid, owner: ownerUuid});
      return clinicHistory;
    } catch (err) {
      throw boom.boomify(err);
    }
  },
}

