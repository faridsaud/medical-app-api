import Patient from '../models/Patient';
import {getRESTfulControllerMethodsWithOwner} from '../helpers/controllers';

export default {
    ...getRESTfulControllerMethodsWithOwner(Patient, {singular: 'Patient', plural: 'Patients'}),

}
