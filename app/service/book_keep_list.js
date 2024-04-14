const Service = require('egg').Service;
const { Op } = require('sequelize');

class BookKeepListService extends Service {
  async getList(params) {
    const { ctx: { model } } = this;
    try {
      const result = await model.BookKeepList.findAll({  
        where: {  
          created_date: {  
            [Op.gte]: params.start_time,  
            [Op.lt]: params.end_time  
          },
          uid: params.uid
        }  
      });
      return result.filter(item => !item.is_detele);
    } catch (e) {
      console.log(e);
      return null;
    }
  }

  async addInfo(params) {
    const { ctx } = this;
    try {
      return await ctx.model.BookKeepList.create(params);
    } catch (e) {
      console.log(e);
      return null;
    }
  }
}

module.exports = BookKeepListService;