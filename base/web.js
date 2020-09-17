const { endpoints } = require('../web/endpoints')
const { createServer } = require('../web/server')

const PORT = 8081

var server = {
    fileLoc: `${__dirname}\\..\\web\\ui\\`,
    endpoints: endpoints,
    port: PORT
}