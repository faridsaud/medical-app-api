import PhysicalExam from '../models/PhysicalExam';
import {getRESTfulControllerMethods} from '../helpers/controllers';

export default {
  ...getRESTfulControllerMethods(PhysicalExam, {singular: 'PhysicalExam', plural: 'PhysicalExams'})
}

