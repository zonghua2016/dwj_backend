'use strict'

const jwt = require('jsonwebtoken')
const config = require('../../config')
const userServices = require('../../services').user
const {
  InvalidQueryError
} = require('../error')
const login = {}
login.login = async (ctx, next) => {
  const {
    username,
    password
  } = ctx.request.body
  if (!username || !password) {
    throw new InvalidQueryError()
  }

  const user = await userServices.login({
    username: username,
    password: password
  })

  console.log('根据用户名查到的用户：：：', user)
  
  if (!user) {
    ctx.result = ''
    ctx.msg = '用户不存在'
  } else {
    ctx.msg="登录成功",
    ctx.usesinfo = user,
    ctx.result = jwt.sign({
      data: user.id,
      // 设置 token 过期时间
      exp: Math.floor(Date.now() / 1000) + (60 * 60), // 60 seconds * 60 minutes = 1 hour
    }, config.secret)
  }
  return next()
}

module.exports = login