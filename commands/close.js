const ticket = require('tickets-discord');

async function close(message) {
  message.channel.send({
            content: String('Closed the ticket')
          });
  
  ticket.close(message.channel);
}
module.exports = close
console.log("loaded close.js")