'use strict'

const Egg = require('egg');
const Controller = Egg.Controller;

class HomeController extends Controller {
	async index() {
		const content = await this.app.mysql.get('blog-content', {});
		this.ctx.body = content;
	} 
	async home() {
		this.ctx.body = "<h2>Hello Home!</h2>"
	} 
}

module.exports = HomeController;
