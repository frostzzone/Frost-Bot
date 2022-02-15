const ticket = require('tickets-discord');

async function unarchive(message) {
  message.channel.send({
  content: String('Unarchived the ticket')
});
ticket.unarchive(message.channel);
}
module.exports = unarchive
console.log("loaded unarchive.js")