// const User = require('../models/1index').getModel('user')
const User = require('../models/user')
const user = {
    async login({username, password}) {
        let users = await User.getUsersByName({username, password})
        return users;
    }
}

module.exports = user