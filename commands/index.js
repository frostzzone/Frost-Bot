console.log("loading command files")
module.exports = {
  unarchive: require('./unarchive'),
  archive: require('./archive'),
  close: require('./close'),
  tick: require('./ticket'),
  inv: require('./inv')
}

console.log("loaded command files \n\n logging in...")