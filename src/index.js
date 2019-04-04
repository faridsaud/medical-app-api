import 'dotenv/config';
import jwt from 'fastify-jwt';
import db from './config/db';
import swagger from './config/swagger';
import routes from './routes';

// Require the framework and instantiate it
const fastify = require('fastify')({
  logger: true,
});

fastify.register(require('fastify-swagger'), swagger.options);

fastify.register(jwt, {
  secret: 'v^HRhh9rJxxq5gfiKjwi5wAlm4WX@d',
});

fastify.register(require('fastify-cookie'));



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
