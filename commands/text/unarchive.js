const ticket = require('tickets-discord');

async function unarchive(s4dmessage) {
  s4dmessage.channel.send({
  content: String('Unarchived the ticket')
});
ticket.unarchive(s4dmessage.channel);
}
module.exports = unarchive
console.log("loaded unarchive.js")