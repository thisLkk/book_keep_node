/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('book_keep_list', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    money: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    record_type: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    record_remark: {
      type: DataTypes.STRING(260),
      allowNull: true
    },
    record_label: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    extend: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    is_delete: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    uid: {
      type: DataTypes.STRING(260),
      allowNull: false
    },
    created_date: {
      type: DataTypes.INTEGER(20),
      allowNull: true,
    },
    updated_date: {
      type: DataTypes.INTEGER(20),
      allowNull: true,
    },
  }, {
    tableName: 'book_keep_list',
    timestamps: false,
    hooks: {  
      beforeCreate(model, options) {  
        delete model.dataValues.created_at; // 在创建之前删除 createdAt 字段
        model.created_date = new Date().getTime();
      },  
      beforeUpdate(model, options) {  
        delete model.dataValues.updated_at;
        model.updated_date = new Date().getTime();
        // 如果需要的话，你也可以在这里处理 updatedAt 字段的行为  
      }  
    }
  });

  Model.associate = function() {

  }

  return Model;
};
