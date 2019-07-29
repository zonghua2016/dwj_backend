'use strict'

const Router = require('koa-router')
const controllers = require('../lib/controllers')

const router = new Router()
router.prefix('/api')

router.post('/login', controllers.login.login)

module.exports = router
