import PatientController from '../controllers/Patient';
import {getRESTfulRoutes} from '../helpers/routes';

export default getRESTfulRoutes(PatientController, {singular: 'Patient', plural: 'Patients'});
