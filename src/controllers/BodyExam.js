import BodyExam from '../models/BodyExam';
import {getRESTfulControllerMethodsWithOwner} from '../helpers/controllers';

export default {
  ...getRESTfulControllerMethodsWithOwner(BodyExam, {singular: 'BodyExam', plural: 'BodyExams'})
}

