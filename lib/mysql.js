const mysql = require('mysql');
const config = require('../config')
const connectionMySql = mysql.createConnection({
  host: config.mysql.host, // 连接的服务器
  user: config.mysql.user, // 用户名
  password: config.mysql.password, // 用户密码
  database: config.mysql.database // 选择的库
})

connectionMySql.connect() // 创建一个mysql的线程
// export const mysql = connection;
module.exports = connectionMySql;
// connection.query('show tables', (err, results, fields) => {
//   if (err) {
//     throw err
//   };

//   console.log('The solution is:', results)
// })

// 标题，封面，简介，上传时间，text