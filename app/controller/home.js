'use strict'

const Controller = require('egg').Controller;

class HomeController extends Controller {
	async index() {
		this.ctx.body = "api 模拟接口";
	}

	async home() {
		this.ctx.body = "<h2>Hello Home</h2>";
	}
}

module.exports = HomeController;
