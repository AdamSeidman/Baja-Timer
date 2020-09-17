const { endpoints } = require('../web/endpoints')
const { createServer } = require('../web/server')

const PORT = 8081

var server = {
    fileLoc: `${__dirname}\\..\\web\\ui\\`,
    endpoints: endpoints,
    port: PORT
}

var setup = function () {
    server.server = createServer(server.fileLoc, server.endpoints, server.port)
}

module.exports = {
    setupWebServer: setup
}