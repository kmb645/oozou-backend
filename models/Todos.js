module.exports = (sequelize, DataTypes) => {
    const Todos = sequelize.define("Todos", {
        title:{
            type: DataTypes.STRING,
            allowNull: false
        },
        status: {
            type: DataTypes.ENUM("pending", "completed"),
            defaultValue: "pending",
          }
    });
    
    Todos.associate = (models) => {
        Todos.hasMany(models.Subtasks, {
            onDelete: "cascade"
        })
    }

    return Todos;
}