/*
# Exercise: Hapi Intro

- Install HapiJS
- Start Hapi server and respond with "Hello from HapiJS"


## Reference:

https://hapijs.com/

*/
const Hapi = require('hapi');
const server = new Hapi.Server();

server.connection({port: 3008,host: 'localhost'});
server.route({
  method: 'GET',
  path: '/login',
  handler: (request,reply) => {
    console.log('request',request.query);
    reply('Hello From HapiJS');
  }
});

server.start(() => {
//   if (err) {
//     throw err;
//   }
  console.log(`Server running at: ${server.info.uri}`);
});