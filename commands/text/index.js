console.log("loading command files")
module.exports = {
  unarchive: require('./unarchive'),
  archive: require('./archive'),
  close: require('./close'),
  tick: require('./ticket'),
  inv: require('./inv'),
  bal: require('./bal'),
  beg: require('./beg'),
  invite: require('./invite'),
  calc: require('./calculator'),
  snake: require('./snake'),
  aki: require('./aki'),
  help: require('./help'),
  sync: require('./sync_slash')
}

console.log("loaded command files\n")