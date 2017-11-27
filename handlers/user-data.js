const info = require('../assets/info.json');
const fs = require('fs');

module.exports = (request, reply) => {
  const userQuery = request.query.user || '';
  const userData = info.data.find((user) => user.name.toLowerCase() === userQuery.toLowerCase());

  if (userData) {
    fs.readFile(`./assets/data/${userData.dataFile}`, 'utf8', (err, data) => {
      reply(data);
    });
  }

  return reply('User not found.');
};