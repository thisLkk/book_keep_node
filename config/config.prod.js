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
    host: 'localhost',
    port: 3306,
    username: 'hnunu',
    password: 'hnunu123',
    database: 'hnunu',
  }
  config.cors = {  
    origin: '*', // 允许来自任何源的访问  
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH', // 允许的方法  
    credentials: true, // 是否发送cookie  
    allowHeaders: 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With', // 允许的HTTP头  
  }
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1712759179323_52751';

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