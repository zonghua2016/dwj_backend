'use strict'

const mysql = require('../lib/mysql')
module.exports = {
  showTables: function () {
    mysql.query('show tables', (err, results, fields) => {
      if (err) {
        throw err
      }
      return results;
      console.log('The solution is:', results)
    })
  },
};