import User from '../models/User';
import boom from 'boom';
import bcrypt from 'bcrypt';

export default {
  'login': async (req, reply) => {
    try {
      const {email, password} = req.body;
      const user = await User.findOne({email});
      if(!user){
        reply.code(401).send();
      }
      bcrypt.compare(password, user.password, async (err, res) => {
        if (res) {
          const token = await reply.jwtSign({email, uuid: user._id});
          reply
          .setCookie('accessToken', token, {
            httpOnly: true,
            maxAge: 604800,
          })
          .code(200).send(token);
        } else {
          reply.code(401).send();
        }
      });
    } catch (err) {
      throw boom.boomify(err);
    }
  },
};
