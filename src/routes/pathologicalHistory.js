import PathologicalHistoryController from '../controllers/PathologicalHistory';
import {getRESTfulRoutes} from '../helpers/routes';

export default getRESTfulRoutes(PathologicalHistoryController, {singular: 'PathologicalHistory', plural: 'PathologicalHistories'});
