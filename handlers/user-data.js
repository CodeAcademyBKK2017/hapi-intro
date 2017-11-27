const info = require('../assets/info.json');
const fs = require('fs');

module.exports = (request, reply) => {
    if (request.query.user) {
        const userData = info.data.find(user => user.name.toLowerCase() === request.query.user.toLowerCase());

        if(userData) {
            return reply(fs.readFileSync(`./assets/data/${userData.dataFile}`, 'utf8'));
        }
    }

    return reply('User not found.');
}