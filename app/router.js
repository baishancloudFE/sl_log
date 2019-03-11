'use strict'

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
	const { router, controller } = app
	const logRouter = router.namespace('/sl_log')
	logRouter.get('/query', controller.log.query)
	logRouter.get('/count', controller.log.count)
	logRouter.post('/create', controller.log.create)
	logRouter.post('/remove', controller.log.remove)
	router.get('/package/:name/:version', controller.npm.index)
	router.get('/package/:name', controller.npm.index)
	router.get('/test/error_test', controller.test.errorTest)
}
