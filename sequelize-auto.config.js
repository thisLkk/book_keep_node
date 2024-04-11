// sequelize-auto.config.js  
module.exports = {  
    directory: './app/model', // 生成的 model 存放目录  
    host: '81.70.158.28', // 数据库地址  
    port: 3306,
    dialect: 'mysql', // 数据库类型  
    database: 'hnunu_test', // 数据库名  
    username: 'hnunu_test', // 数据库用户名  
    password: 'hnunutest123', // 数据库密码  
    logging: console.log, // 日志输出  
    define: {  
      timestamps: false, // 是否自动添加 createdAt 和 updatedAt 时间戳  
      underscored: true, // 是否使用下划线命名  
      // 其他 Sequelize 的 define 选项  
    },  
  };