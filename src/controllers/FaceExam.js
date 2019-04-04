import FaceExam from '../models/FaceExam';
import {getRESTfulControllerMethodsWithOwner} from '../helpers/controllers';

export default {
  ...getRESTfulControllerMethodsWithOwner(FaceExam, {singular: 'FaceExam', plural: 'FaceExams'})
}

