import ClinicHistory from '../models/ClinicHistory';
import {getRESTfulControllerMethodsWithOwner} from '../helpers/controllers';

export default {
  ...getRESTfulControllerMethodsWithOwner(ClinicHistory, {singular: 'ClinicHistory', plural: 'ClinicHistories'})
}

