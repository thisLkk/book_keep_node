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
    created_at: {
      type: DataTypes.TIME,
      allowNull: false,
      defaultValue: app.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    updated_at: {
      type: DataTypes.TIME,
      allowNull: false,
      defaultValue: app.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    tableName: 'book_keep_list'
  });

  Model.associate = function() {

  }

  return Model;
};
