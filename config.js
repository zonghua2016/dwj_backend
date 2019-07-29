'use strict'

const path = require('path')

module.exports = {
  port: '8888',
  secret: 'secret',
  publicDir: path.resolve(__dirname, './public'),
  logPath: path.resolve(__dirname, './logs/koa-template.log'),
  mongoDB: {
    database: 'mall',
    username: 'root',
    password: 'root',
    host: '127.0.0.1',
    port: 27017
  },
  mysql:{
    host: 'rm-m5e57e57bxbxwwueldo.mysql.rds.aliyuncs.com',
    user: 'website',
    database: 'mainsite',
    password: 'Web@Html5'
  }
}
