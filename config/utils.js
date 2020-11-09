const fs = require('fs');
const path = require('path');

const appDirectory = fs.realpathSync(process.cwd());

const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

function aliasTest(path){
  const reg = /\/\*$/
  let target = []
  if(Array.isArray(path)){
    target = path
  }else if(typeof path === 'string'){
    target = [path]
  }
  return target.every(e=>reg.test(e))
}
module.exports = {
  aliasTest,
  resolveApp
}
