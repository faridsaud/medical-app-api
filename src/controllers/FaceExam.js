import FaceExam from '../models/FaceExam';
import {getRESTfulControllerMethods} from '../helpers/controllers';

export default {
  ...getRESTfulControllerMethods(FaceExam, {singular: 'FaceExam', plural: 'FaceExams'})
}

