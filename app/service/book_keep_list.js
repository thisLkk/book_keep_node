const Service = require('egg').Service;
const { Op } = require('sequelize');

class BookKeepListService extends Service {
  async getList(params) {
    const { ctx: { model } } = this;
    try {
      const result = await model.BookKeepList.findAll({  
        where: {  
          add_bill_date: {  
            [Op.gte]: params.start_time,  
            [Op.lt]: params.end_time  
          },
          uid: params.uid
        }  
      });
      return result.filter(item => !item.is_delete);
    } catch (e) {
      return null;
    }
  }

  async addInfo(params) {
    const { ctx } = this;
    try {
      return await ctx.model.BookKeepList.create(params);
    } catch (e) {
      return null;
    }
  }

  async delOneBill(params) {
    const { ctx } = this;
    try {
      // 这里未做更新前的判断，严谨是需要加的，自己demo先忽略
      const currentBillData = await ctx.model.BookKeepList.findByPk(params); // 根据 id 查找用户 
      currentBillData.is_delete = 1;
      await currentBillData.save(); // 保存更改到数据库 
      return true;
    } catch (e) {
      return null;
    }
  }
}

module.exports = BookKeepListService;