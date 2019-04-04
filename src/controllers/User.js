import User from '../models/User';
import {getRESTfulControllerMethods} from '../helpers/controllers';

export default {
  ...getRESTfulControllerMethods(User, {singular: 'User', plural: 'Users'}, false)
}

