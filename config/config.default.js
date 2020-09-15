/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
// config/config.${env}.js
exports.mysql = {
	// 单数据库信息配置
	client: {
		// host
		host: 'localhost',
		// 端口号
		port: '3306',
		// 用户名
		user: 'thomas',
		// 密码
		password: '123789@@Zq',
		// 数据库名
		database: 'next-blog',
	},
	// 是否加载到 app 上，默认开启
	app: true,
	// 是否加载到 agent 上，默认关闭
	agent: false,
};

// set config.keys
exports.keys = 'my super cool keys';
