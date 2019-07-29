1
const fs = require('fs');
const path = require('path');
const config = require('../config')
const {
  logger
} = require('../middlewares/logger')
let api = {};

// 整合models文件下的其他js文件
fs.readdirSync(__dirname)
  .filter(function (file) {
    return (file.indexOf(".") !== 0) && (file !== "index.js");
  }).forEach(function (file) {
    var modelFile = require(path.join(__dirname, file));
    // api[modelFile.name] = modelFile.
  });
// 根据name选择model
db.getModel = function (name) {
  return this.models[name];
};

module.exports = db;