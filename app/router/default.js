'use strict';

module.exports = app => {
	const {router,controller} = app
    router.get('/default/index',controller.default.home.index),
    router.get('/default/home',controller.default.home.home)
}
