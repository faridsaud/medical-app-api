import Patient from '../models/Patient';
import {getRESTfulControllerMethods} from '../helpers/controllers';

export default {
    ...getRESTfulControllerMethods(Patient, {singular: 'Patient', plural: 'Patients'}),

}
