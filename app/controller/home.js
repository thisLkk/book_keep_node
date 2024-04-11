const { Controller } = require('egg');

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    console.log('models---------: ', ctx.model.BookKeepTag);
    ctx.body = 'hi, egg';
  }
}

module.exports = HomeController;
