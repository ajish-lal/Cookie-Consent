const routes = require('./routes')
const db = require("./mongodb");
const logger = require('./logger');

// ------ Require the framework and instantiate it---------//
const fastify = require('fastify')({
  logger: true
})

routes.forEach((route, index) => {
  fastify.route(route)
})

fastify.setErrorHandler(function (error, request, reply) {
  try {
    throw error
  }
  catch (err) {
    logger.error(`${error.message} - ${request.method} - ${request.ip}`);
    reply.send(`Error Occurred -  ${error.message}`);
  }
})

db.connect((err) => {
  if (err) {
    fastify.log.error("Unable to connect database");
    process.exit();
  } else {
    fastify.log.info("Connected to database....");
  }
});



// ------------ Run the server -----------//
const start = async () => {
  try {
    await fastify.listen(3000)
    fastify.log.info(`server listening on ${fastify.server.address().port}`)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()