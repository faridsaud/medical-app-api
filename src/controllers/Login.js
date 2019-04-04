import User from '../models/User';
import boom from 'boom';
import bcrypt from 'bcrypt';

export default {
  'login': async (req, reply) => {
    try {
      const {email, password} = req.body;
      const user = await User.findOne({email});
      bcrypt.compare(password, user.password, function(err, res) {
        if(res){
          reply
          .code(200)
          .send();
        }else{
          reply
          .code(403)
          .send();
        }
      });
    } catch (err) {
      throw boom.boomify(err);
    }
  },
};
