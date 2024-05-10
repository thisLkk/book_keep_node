module.exports = (app) => {
    const { router, controller } = app;
    router.get('/api/book_keep/add_info', controller.bookKeepList.addInfo);
    router.get('/api/book_keep/get_list', controller.bookKeepList.getList);
    router.get('/api/book_keep/get_month_data', controller.bookKeepList.getMonthData);
    router.get('/api/book_keep/del_bill', controller.bookKeepList.delBill);
}