'use strict'

const Router = require('koa-router')
const controllers = require('../lib/controllers')
const jwtMiddleware = require('../middlewares/jwt')

const router = new Router()
router.prefix('/api')
router.use(jwtMiddleware)

router.get('/test', controllers.test.test)

module.exports = router
