const ticket = require('tickets-discord');

async function close(s4dmessage) {
  s4dmessage.channel.send({
            content: String('Closed the ticket')
          });
  
  ticket.close(s4dmessage.channel);
}
module.exports = close
console.log("loaded close.js")