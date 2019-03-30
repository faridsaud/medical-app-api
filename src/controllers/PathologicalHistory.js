import PathologicalHistory from '../models/PathologicalHistory';
import {getRESTfulControllerMethods} from '../helpers/controllers';

export default {
  ...getRESTfulControllerMethods(PathologicalHistory, {singular: 'PathologicalHistory', plural: 'PathologicalHistories'})
}
