import 'dotenv/config';
import jwt from 'fastify-jwt';
import validator from 'validator';
import db from './config/db';
import swagger from './config/swagger';
import {nonAuthRoutes} from './routes';

// Require the framework and instantiate it
const fastify = require('fastify')({
  logger: true,
});

// Swagger
fastify.register(require('fastify-swagger'), swagger.options);

// CORS
fastify.register(require('fastify-cors'), {
  // put your options here
});

// Rate Limit
fastify.register(require('fastify-rate-limit'), {
  max: 100,
  timeWindow: '1 minute'
});


// JWT
fastify.register(jwt, {
  secret: process.env.SECRET,
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

// Routes that doesn't requires to be authenticated
nonAuthRoutes.forEach((route) => {
  fastify.route(route)
});

// Routes that requires to be authenticated
fastify.register(
    require('./plugins/auth')
);





db.then(() => console.log('MongoDB connected...'))
.catch(err => console.log(err));


export default fastify;
