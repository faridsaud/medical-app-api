import NonPathologicalHistory from '../models/NonPathologicalHistory';
import {getRESTfulControllerMethodsWithOwner} from '../helpers/controllers';

export default {
  ...getRESTfulControllerMethodsWithOwner(NonPathologicalHistory, {singular: 'NonPathologicalHistory', plural: 'NonPathologicalHistories'})
}
