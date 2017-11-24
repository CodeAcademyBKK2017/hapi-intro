/*
# Exercise: Hapi Intro

- Install HapiJS
- Start Hapi server and respond with "Hello from HapiJS"


## Reference:

https://hapijs.com/

*/

const Hapi = require('hapi');

const server = new Hapi.Server();

server.connection({port: 3000, host: 'localhost'});

server.route({
  method: 'GET',
  path: '/login',
  handler: (request, reply) => {
    // console.log('request.params', request.params);
    // console.log('request.query', request.query);
    reply('Hello from HapiJS');
  }
});

server.start(() => {
  console.log('Server start !');
});