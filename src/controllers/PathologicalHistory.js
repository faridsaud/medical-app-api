import PathologicalHistory from '../models/PathologicalHistory';
import {getRESTfulControllerMethodsWithOwner} from '../helpers/controllers';

export default {
  ...getRESTfulControllerMethodsWithOwner(PathologicalHistory, {singular: 'PathologicalHistory', plural: 'PathologicalHistories'})
}
