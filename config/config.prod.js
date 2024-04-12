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