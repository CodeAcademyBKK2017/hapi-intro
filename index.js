const Hapi = require('hapi');

// Create a server with a host and port
const server = new Hapi.Server();
server.connection({ 
    host: 'localhost', 
    port: 8000 
});

server.route({
    method: 'GET',
    path: '/',
    handler: (request, reply) => {
        console.log('query : ', request.query);
        console.log('params : ', request.params);
        reply("hello world");
    }
});

server.start((err) => {
    
    if (err) {
        throw err;
    }
    console.log('Server running at:', server.info.uri);
});