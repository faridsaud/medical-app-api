import NonPathologicalHistory from '../models/NonPathologicalHistory';
import {getRESTfulControllerMethods} from '../helpers/controllers';

export default {
  ...getRESTfulControllerMethods(NonPathologicalHistory, {singular: 'NonPathologicalHistory', plural: 'NonPathologicalHistories'})
}
