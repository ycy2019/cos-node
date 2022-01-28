const { Sequelize, DataTypes } = require('sequelize');
const fs = require("fs");
const path = require("path");
let databasePool = {};
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './public/data/test.sqlite'
});

const ormDatabase = async function () {
    let modelDirs = fs.readdirSync(path.join(__dirname, "./model"));
    console.log("开始读取数据库配置文件")
    let models = modelDirs.reduce(function (output, item) {
        let data = require("./model/" + item);
        Object.assign(output, data)
        return output
    }, {})
    Object.keys(models).forEach(function (item) {
        databasePool[item] = sequelize.define(item, models[item]);
    })

    await sequelize.sync({ force: true });
    console.log("同步数据库model成功.");
};

(async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})();
ormDatabase()
// sequelize.models.user.create({
//     id:"123",
//     account:"test",
//     password:"test"
//   })
module.exports =sequelize;