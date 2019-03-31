import ClinicHistoryController from '../controllers/ClinicHistory';
import {getRESTfulRoutes} from '../helpers/routes';

export default getRESTfulRoutes(ClinicHistoryController, {singular: 'ClinicHistory', plural: 'ClinicHistories'});
