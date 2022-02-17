async function bal(s4dmessage, s4d, arguments2, MessageEmbed) {
  if (!s4d.database.has(String((String((s4dmessage.author).id) + '-bank')))) {
    s4d.database.set(String((String((s4dmessage.author).id) + '-bank')), 0);
  }
  if (!s4d.database.has(String((String((s4dmessage.author).id) + '-cash')))) {
    s4d.database.set(String((String((s4dmessage.author).id) + '-cash')), 0);
  }
  try {
    if (!((s4dmessage.mentions.members.first().user) == null)) {
      if (!(s4d.database.get(String((String((s4dmessage.mentions.members.first().user).id) + '-cash'))) == null) && !(String((s4dmessage.mentions.members.first().user).id) + '-bank' == null)) {
        s4dmessage.reply({
          embeds: [new MessageEmbed()
            .setTitle(String((['**', (s4dmessage.mentions.members.first().user).username, '\'s Balance**'].join(''))))


            .setDescription(String((['**Wallet**: ', s4d.database.get(String((String((s4dmessage.mentions.members.first().user).id) + '-cash'))), '\n', '**Bank**: ', s4d.database.get(String((String((s4dmessage.mentions.members.first().user).id) + '-bank')))].join(''))))


          ],

          allowedMentions: {
            repliedUser: true
          }
        });
      } else {
        s4dmessage.reply({
          embeds: [new MessageEmbed()
            .setTitle(String((String((s4dmessage.mentions.members.first().user).username) + '\'s Balance')))


            .setDescription(String('This user has never played'))


          ],

          allowedMentions: {
            repliedUser: true
          }
        });
      }
    }

  } catch (err) {
    command = arguments2.splice(0, 1)[0];
    try {
      if (!!command.length) {
        if (!(s4d.database.get((((s4dmessage.guild).members.cache.get(command) || await (s4dmessage.guild).members.fetch(command)).user).id + '-cash') == null) && !(s4d.database.get((((s4dmessage.guild).members.cache.get(command) || await (s4dmessage.guild).members.fetch(command)).user).id + '-bank') == null)) {
          s4dmessage.reply({
            embeds: [new MessageEmbed()
              .setTitle(String((['**', (((s4dmessage.guild).members.cache.get(command) || await (s4dmessage.guild).members.fetch(command)).user).username, '\'s Balance**'].join(''))))


              .setDescription(String((['**Wallet**: ', s4d.database.get(String(((((s4dmessage.guild).members.cache.get(command) || await (s4dmessage.guild).members.fetch(command)).user).id + '-cash'))), '\n', '**Bank**: ', s4d.database.get(String(((((s4dmessage.guild).members.cache.get(command) || await (s4dmessage.guild).members.fetch(command)).user) + '-bank')))].join(''))))


            ],

            allowedMentions: {
              repliedUser: true
            }
          });
        } else {
          s4dmessage.reply({
            embeds: [new MessageEmbed()
              .setTitle(String((String((((s4dmessage.guild).members.cache.get(command) || await (s4dmessage.guild).members.fetch(command)).user).username) + '\'s Balance')))


              .setDescription(String('This user has never played'))


            ],

            allowedMentions: {
              repliedUser: true
            }
          });
        }
      }

    } catch (err) {
      if (!(s4d.database.get(String((String((s4dmessage.author).id) + '-cash'))) == null) && !(String((s4dmessage.author).id) + '-bank' == null)) {
        s4dmessage.reply({
          embeds: [new MessageEmbed()
            .setTitle(String((['**', (s4dmessage.author).username, '\'s Balance**'].join(''))))


            .setDescription(String((['**Wallet**: ', s4d.database.get(String((String((s4dmessage.author).id) + '-cash'))), '\n', '**Bank**: ', s4d.database.get(String((String((s4dmessage.author).id) + '-bank')))].join(''))))


          ],

          allowedMentions: {
            repliedUser: true
          }
        });
      } else {
        s4dmessage.reply({
          embeds: [new MessageEmbed()
            .setTitle(String((String((s4dmessage.author).username) + '\'s Balance')))


            .setDescription(String('You have never played'))


          ],

          allowedMentions: {
            repliedUser: true
          }
        });
      }

    };

  };
}

              module.exports = bal
console.log("loaded bal.js")