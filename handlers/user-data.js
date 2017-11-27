const info = require('../assets/info.json');
const fs = require('fs');

module.exports = (request, reply) => {
    const userQuery = request.query.user || '';
    const userData = info.data.find(user => user.name.toLowerCase() === userQuery.toLowerCase());

    let result = '';

    if (userData) {
        result = reply(fs.readFileSync(`./assets/data/${userData.dataFile}`, 'utf8'));
    } else {
        result = 'User not found.';
    }


    return reply(result);
}