
async function tick(message) {
  try {
    ticket.setup(message, message.mentions.channels.first().id);
    message.channel.send({
      content: String((['I have set the ticket channel to ', '<#', message.mentions.channels.first(), '>'].join('')))
    });

  } catch (err) {
    message.channel.send({
      content: String('You need to mention a channel!')
    });

  };
}
module.exports = tick
console.log("loaded ticket.js")