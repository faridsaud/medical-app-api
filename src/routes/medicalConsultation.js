import MedicalConsultationController from '../controllers/MedicalConsultation';
import {getRESTfulRoutes} from '../helpers/routes';

export default getRESTfulRoutes(MedicalConsultationController, {singular: 'MedicalConsultation', plural: 'MedicalConsultations'});
