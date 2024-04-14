/* eslint valid-jsdoc: "off" */

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};
  config.sequelize = {
    dialect: 'mysql',
    host: '81.70.158.28',
    port: 3306,
    username: 'hnunu_test',
    password: 'hnunutest123',
    database: 'hnunu_test',
    dialectOptions: {  
      useUTC: true, // 对于某些数据库方言（如 PostgreSQL），设置为 true 使用 UTC  
      timezone: 'Asia/Shanghai', // 使用 IANA 时区名称  
    },
  }
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1712759179323_5275';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
  };
  return {
    ...config,
    ...userConfig,
  };
};