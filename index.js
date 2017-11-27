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
    path: '/first-user',
    handler: require('./handlers/first-user')
});

server.route({
    method: 'GET',
    path: '/user-data',
    handler: require('./handlers/user-data')
});

server.start(() => { });