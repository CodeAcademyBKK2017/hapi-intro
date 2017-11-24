/*
# Exercise: Hapi Intro

- Install HapiJS
- Start Hapi server and respond with "Hello from HapiJS"


## Reference:

https://hapijs.com/

*/

const Hapi = require('hapi')
const server = new Hapi.Server()
server.connection({port:3000,host:'localhost'})
server.start(()=>{
    console.log('server start YO!')
})