
async function tick(message) {
  try {
    ticket.setup(s4dmessage, message.mentions.channels.first().id);
    s4dmessage.channel.send({
      content: String((['I have set the ticket channel to ', '<#', s4dmessage.mentions.channels.first(), '>'].join('')))
    });

  } catch (err) {
    s4dmessage.channel.send({
      content: String('You need to mention a channel!')
    });

  };
}
module.exports = tick
console.log("loaded ticket.js")