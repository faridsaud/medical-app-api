import FaceExamController from '../controllers/FaceExam';
import {getRESTfulRoutes} from '../helpers/routes';

export default getRESTfulRoutes(FaceExamController, {singular: 'FaceExam', plural: 'FaceExams'});
