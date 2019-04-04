import authenticatedRoutes from '../routes/authenticatedRoutes';

const fp = require('fastify-plugin');

module.exports = fp(function (fastify, opts, next) {
  fastify.addHook('preHandler', fastify.auth([
    fastify.verifyJWT,
  ]));
  authenticatedRoutes.forEach((route) => {
    fastify.route(route)
  });

  next();
});
