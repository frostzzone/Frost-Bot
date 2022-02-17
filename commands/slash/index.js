console.log("loading slash command files")
module.exports = {
  beg: require('./beg'),
  aki: require('./aki'),
  invite: require('./invite'),
  sync: require('./sync_slash')
}

console.log("loaded slash command files \n\nlogging in...\n")