const ronin     = require( 'ronin-server' )
const mocks     = require( 'ronin-mocks' )
const database  = require('ronin-database')
const server = ronin.server()

database.connect(process.env.CONNECTIONSTRING)
server.use( '/foo', (res,req) => {
  return res.json({'foo' : 'bar'})
});
server.start()