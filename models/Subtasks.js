module.exports = (sequelize, DataTypes) => {
    const Subtasks = sequelize.define("Subtasks", {
        title:{
            type: DataTypes.STRING,
            allowNull: false
        },
        status: {
            type: DataTypes.ENUM("pending", "completed"),
            defaultValue: "pending",
          },
    });
    
    return Subtasks;
}