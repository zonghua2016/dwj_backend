'use strict'

const mysql = require('../lib/mysql')
module.exports = {
  getUsersByName: function ({
    username,
    password
  }) {
    return new Promise((resolve, reject) => {
      mysql.query(`SELECT * FROM users WHERE username = '${username}'`, (err, results, fields) => {
        if (err) {
          throw err
        }
        let user = results[0]
        if (user.password === password) {
          resolve({
            id: user.id,
            username: user.username,
            isadmin: user.isadmin,
            registDate: user.registDate,
            lastLoginDate: user.lastLoginDate
          })
        } else {
          reject({
            errmsg: '用户名密码不正确'
          })
        }
      })
    })
  },
};