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
	async getArticleList() {
		let sql = 'SELECT article.id as id ,' + 
		'article.title as title ,' + 
		'article.introduce as intro ,' + 
		'article.addTime as addTime ,' + 
		"FROM_UNIXTIME(article.addTime,'%Y-%m-%d %H:%i:%s' ) as addTime ," + 
		'article.view_count as viewCount ,' + 
		'type.typeName as typeName ' + 
		'FROM article LEFT JOIN type ON article.type_id = type.id';
		const results = await this.app.mysql.query(sql);
		this.ctx.body = {data: results};
	}
}

module.exports = HomeController;
