import NonPathologicalHistoryController from '../controllers/NonPathologicalHistory';
import {getRESTfulRoutes} from '../helpers/routes';

export default getRESTfulRoutes(NonPathologicalHistoryController, {singular: 'NonPathologicalHistory', plural: 'NonPathologicalHistories'});
