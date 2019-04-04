import {authRoutes} from '../routes';

module.exports = (fastify, options, next) => {
  fastify.addHook('preHandler', fastify.auth([
    fastify.verifyJWT,
  ]));
  authRoutes.forEach((route) => {
    fastify.route(route)
  });

  next();
};
