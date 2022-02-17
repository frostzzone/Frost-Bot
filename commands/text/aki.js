async function aki(s4dmessage, akinator, MessageActionRow,  MessageButton, delay){
  s4dmessage.channel.sendTyping();
          await delay(Number(1) * 1000);
          (s4dmessage.channel).send({
            embeds: [{
              title: 'Akinator',
              color: '#ff0000',
              image: {
                url: null
              },
              description: (['Think about something and awnser questions about it', '\n', '\n', '👤Character - I\'m thinking of a character', '\n', '🏠Object - I\'m thinking of an object', '\n', '🐛Animal - I\'m thinking of an animal'].join('')),
              footer: {
                text: null
              },
              thumbnail: {
                url: null
              }
            }],
            components: [(new MessageActionRow()
              .addComponents(new MessageButton()
                .setCustomId('c')
                .setLabel('Character')
                .setEmoji('👤')
                .setStyle(('SUCCESS')),
                new MessageButton()
                  .setCustomId('o')
                  .setLabel('Object')
                  .setEmoji('🏠')
                  .setStyle(('DANGER')),
                new MessageButton()
                  .setCustomId('a')
                  .setLabel('Animal')
                  .setEmoji('🐛')
                  .setStyle(('PRIMARY')),
              ))]
          }).then(m => {
            let collector = m.createMessageComponentCollector({
              filter: i => i.user.id === (s4dmessage.author).id,
              time: 60000
            });
            collector.on('collect', async i => {
              if ((i.customId) == 'c') {
                akinator(s4dmessage, {
                  language: "en",
                  childMode: true,
                  gameType: 'character',
                  useButtons: true
                })
              } else if ((i.customId) == 'a') {
                akinator(s4dmessage, {
                  language: "en",
                  childMode: true,
                  gameType: 'animal',
                  useButtons: true
                })
              } else if ((i.customId) == 'o') {
                akinator(s4dmessage, {
                  language: "en",
                  childMode: true,
                  gameType: 'object',
                  useButtons: true
                })
              }

            })

          });
}
module.exports = aki
console.log("loaded aki.js")