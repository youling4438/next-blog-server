'use strict';

module.exports = app => {
	const {router,controller} = app
    router.get('/default/index',controller.default.home.index),
    router.get('/default/home',controller.default.home.home),
    router.get('/getArticleList',controller.default.home.getArticleList),
    router.get('/getArticleDetailById/:id',controller.default.home.getArticleDetailById),
    router.get('/getTypeInfo',controller.default.home.getTypeInfo)
}
