/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const BookModel = app.model.define('book_keep_tag', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    value: {
      type: DataTypes.STRING(126),
      allowNull: false
    },
    label: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    type: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '1'
    },
    visible: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '1'
    },
    update_date: {
      type: DataTypes.TIME,
      allowNull: false,
      defaultValue: app.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    create_date: {
      type: DataTypes.TIME,
      allowNull: false,
      defaultValue: app.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    is_delete: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    extend: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    tableName: 'book_keep_tag',
    timestamps: false,
    hooks: {  
      beforeCreate(model, options) {  
        delete model.dataValues.created_at; // 在创建之前删除 createdAt 字段  
      },  
      beforeUpdate(model, options) {  
        delete model.dataValues.updated_at;
        // 如果需要的话，你也可以在这里处理 updatedAt 字段的行为  
      }  
    }
  });

  BookModel.associate = function() {

  }

  return BookModel;
};
