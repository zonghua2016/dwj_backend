
// const User = require('../models/1index').getModel('user')
const User = require('../models/user')
const user = {
    /**
     * @Description: ��¼
     * @date 2019/5/30
     * @params: { Object } userData
     * @return: { Object | null }
     */
    async login () {
        let result = await User.showTables()
        console.log(result)
        return result
    }
}

module.exports = user
