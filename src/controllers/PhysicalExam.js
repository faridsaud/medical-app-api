import PhysicalExam from '../models/PhysicalExam';
import {getRESTfulControllerMethodsWithOwner} from '../helpers/controllers';

export default {
  ...getRESTfulControllerMethodsWithOwner(PhysicalExam, {singular: 'PhysicalExam', plural: 'PhysicalExams'})
}

