import MedicalConsultation from '../models/MedicalConsultation';
import {getRESTfulControllerMethods} from '../helpers/controllers';

export default {
  ...getRESTfulControllerMethods(MedicalConsultation, {singular: 'MedicalConsultation', plural: 'MedicalConsultations'})
}

