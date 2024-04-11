const { Controller } = require('egg');

class BookKeepTagController extends Controller {
  async index() {
    const { ctx } = this;
    const user = await ctx.model.BookKeepTag.findByPk(2);
    if (!user) {
      ctx.status = 404;
      return;
    }

    await user.update({ value: new Date().getMinutes() + '' });
    ctx.body = user;
    ctx.body = 'hi, book';
  }
}

module.exports = BookKeepTagController;
