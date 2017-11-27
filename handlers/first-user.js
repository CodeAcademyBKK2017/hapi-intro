const info = require('../assets/info.json');

module.exports = (request, reply) => {
  const sortedUsers = [...info.data];

  if (request.query.sort === 'true') {
    sortedUsers.sort((userA, userB) => userB.name < userA.name);
  }

  return reply(sortedUsers[0].name);

};