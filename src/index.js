import 'dotenv/config';
import db from './config/db';
import swagger from './config/swagger';
import routes from './routes';

// Require the framework and instantiate it
const fastify = require('fastify')({
  logger: true,
});

fastify.register(require('fastify-swagger'), swagger.options);

routes.forEach((route) => {
  fastify.route(route)
});

db.then(() => console.log('MongoDB connected...'))
.catch(err => console.log(err));

// Run the server!
const start = async () => {
  try {
    await fastify.listen(3000);
    fastify.swagger();
    fastify.log.info(`server listening on ${fastify.server.address().port}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
