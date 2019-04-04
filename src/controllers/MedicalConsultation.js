import MedicalConsultation from '../models/MedicalConsultation';
import {getRESTfulControllerMethodsWithOwner} from '../helpers/controllers';

export default {
  ...getRESTfulControllerMethodsWithOwner(MedicalConsultation, {singular: 'MedicalConsultation', plural: 'MedicalConsultations'})
}

