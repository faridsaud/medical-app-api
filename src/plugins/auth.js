const fp = require('fastify-plugin')

module.exports = fp(function (fastify, opts, next) {
  // your plugin code
  next()
})
