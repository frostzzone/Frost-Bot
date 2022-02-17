const ticket = require('tickets-discord');

async function archive(s4dmessage) {
  s4dmessage.channel.send({
    content: String('Archived the ticket')
  });
  ticket.archive(s4dmessage.channel);
}
module.exports = archive
console.log("loaded archive.js")