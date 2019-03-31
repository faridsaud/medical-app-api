import ClinicHistory from '../models/ClinicHistory';
import {getRESTfulControllerMethods} from '../helpers/controllers';

export default {
  ...getRESTfulControllerMethods(ClinicHistory, {singular: 'ClinicHistory', plural: 'ClinicHistories'})
}

