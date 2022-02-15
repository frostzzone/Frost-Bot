const ticket = require('tickets-discord');

async function archive(message) {
  message.channel.send({
    content: String('Archived the ticket')
  });
  ticket.archive(message.channel);
}
module.exports = archive
console.log("loaded archive.js")