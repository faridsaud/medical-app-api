import BodyExamController from '../controllers/BodyExam';
import {getRESTfulRoutes} from '../helpers/routes';

export default getRESTfulRoutes(BodyExamController, {singular: 'BodyExam', plural: 'BodyExams'});
