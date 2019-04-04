import 'dotenv/config';
import jwt from 'fastify-jwt';
import validator from 'validator';
import db from './config/db';
import swagger from './config/swagger';
import routes from './routes';

// Require the framework and instantiate it
const fastify = require('fastify')({
  logger: true,
});

// Swagger
fastify.register(require('fastify-swagger'), swagger.options);

// JWT
fastify.register(jwt, {
  secret: 'v^HRhh9rJxxq5gfiKjwi5wAlm4WX@d',
});

// Cookies
fastify.register(require('fastify-cookie'));

// Auth
fastify
.decorate('verifyJWT', function (req, reply, done) {
  try {
    const accessToken = req.cookies.accessToken;
    const {email, uuid} = fastify.jwt.decode(accessToken);
    if(!validator.isEmail(email)){
      done(new Error());
    }
    if(!validator.isUUID(uuid)){
      done(new Error());
    }
    done();
  }catch (e) {
    done(e);
  }

})
.register(require('fastify-auth'));

// Auth Routes
fastify.register(
    require('./plugins/auth')
);

// No Auth Routes
routes.forEach((route) => {
  fastify.route(route)
});



db.then(() => console.log('MongoDB connected...'))
.catch(err => console.log(err));

// Run the server!
const start = async () => {
  try {
    await fastify.listen(process.env.PORT);
    fastify.swagger();
    fastify.log.info(`server listening on ${fastify.server.address().port}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
