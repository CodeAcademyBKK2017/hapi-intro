/*
# Exercise: Hapi Intro

- Install HapiJS
- Start Hapi server and respond with "Hello from HapiJS"


## Reference:

https://hapijs.com/

*/

const Hapi = require('hapi');

const server = new Hapi.Server();

server.connection({ port: 3008, host: 'localhost' });

server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
        return reply('Hello from HapiJS');
    }
});

server.start(() => {
    console.log('Server started. Yay!');
});