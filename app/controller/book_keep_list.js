const { Controller } = require('egg');

/**
 * 获取请求参数
 * @param {string} uid 
 * @param {string} date 如：2024-04
 * @returns 
 */
function getListParams(uid, date) {
  const dateArr = date.split('-');
  const startDate = `${dateArr[0]}-${dateArr[1]} 01 00:00:00`;
  const nextYear = +dateArr[1] === 12 ? +dateArr[0] + 1 : dateArr[0];
  const nextMonth = +dateArr[1] === 12 ? 1 : +dateArr[1] + 1;
  const endDate = `${nextYear}-${nextMonth < 10 ? '0' + nextMonth : nextMonth} 01 00:00:00`;
  return {
    start_time: new Date(startDate).getTime(),
    end_time: new Date(endDate).getTime(),
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
      list.sort((a, b) => {
        return a.add_bill_date - b.add_bill_date;
      })
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
    const serviveParams = params.request.query;
    serviveParams.add_bill_date = new Date(serviveParams.date).getTime();
    delete serviveParams.date;
    const result = await ctx.service.bookKeepList.addInfo(serviveParams);
    if (result) {
      return ctx.success();
    }
    return ctx.error('服务处理异常，请稍后重试', -2);
  }
}

module.exports = BookKeepListController;
