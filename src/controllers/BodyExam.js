import BodyExam from '../models/BodyExam';
import {getRESTfulControllerMethods} from '../helpers/controllers';

export default {
  ...getRESTfulControllerMethods(BodyExam, {singular: 'BodyExam', plural: 'BodyExams'})
}

