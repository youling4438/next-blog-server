'use strict'

const Egg = require('egg');
const Controller = Egg.Controller;

class HomeController extends Controller {
	async index() {
		this.ctx.body = 'api 接口数据';
	} 
	async home() {
		this.ctx.body = "<h2>Hwllo Home!</h2>"
	} 
}

module.exports = HomeController;
