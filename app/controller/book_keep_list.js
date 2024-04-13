const { Controller } = require('egg');

function getListParams(uid, date) {
  const start_time = new Date(+date);
  const end_time_number = date + 1 * 24 * 60 * 60 * 1000
  const end_time = new Date(+end_time_number);
  return {
    start_time,
    end_time,
    uid,
  }
}

class BookKeepListController extends Controller {
  async getMonthData(params) {
    const { ctx } = this;
    const { uid, date } = params.request.query;
    if (!uid || !date) {
      return ctx.error('缺少uid、date入参');
    }
    const formatParams = getListParams(uid, date);
    const result = await ctx.service.bookKeepList.getList(formatParams);
    if (result) {
      const income = result.reduce((prev, item) => {
        const money = item.record_type === 2 ? item.money : 0;
        return prev + money;
      }, 0);
      const pay = result.reduce((prev, item) => {
        const money = item.record_type === 1 ? item.money : 0;
        return prev + money;
      }, 0);
      return ctx.success({ pay, income });
    }
    return ctx.error('服务处理异常，请稍后重试', -2);
  }
  async getList(params) {
    const { ctx } = this;
    const { uid, date } = params.request.query;
    if (!uid || !date) {
      return ctx.error('缺少uid、date入参');
    }
    const formatParams = getListParams(uid, date);
    const result = await ctx.service.bookKeepList.getList(formatParams);
    if (result) {
      const list = result.map(item => {
        const { is_delete, ...other } = item.dataValues;
        return other;
      });
      return ctx.success(list);
    }
    return ctx.error('服务处理异常，请稍后重试', -2);
  }
  // 新增一条记录
  async addInfo(params) {
    const { ctx } = this;
    const { uid, title, money, record_type, record_label} = params.request.query;
    if (!uid || !title || !money || !record_type || !record_label) {
      return ctx.error('缺少 uid, title, money, record_type, record_label 必填字段;');
    }
    const result = await ctx.service.bookKeepList.addInfo(params.request.query);
    if (result) {
      return ctx.success();
    }
    return ctx.error('服务处理异常，请稍后重试', -2);
  }
}

module.exports = BookKeepListController;
