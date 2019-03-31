import PhysicalExamController from '../controllers/PhysicalExam';
import {getRESTfulRoutes} from '../helpers/routes';

export default getRESTfulRoutes(PhysicalExamController, {singular: 'PhysicalExam', plural: 'PhysicalExams'});
