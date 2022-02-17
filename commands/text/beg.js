async function beg(s4dmessage, s4d,  mathRandomInt) {
  if (!s4d.database.has(String((String((s4dmessage.author).id) + '-begcd')))) {
    s4d.database.set(String((String((s4dmessage.author).id) + '-begcd')), ((Math.floor(new Date().getTime() / 1000)) - 1));
  }
  if (!s4d.database.has(String((String((s4dmessage.author).id) + '-bank')))) {
    s4d.database.set(String((String((s4dmessage.author).id) + '-bank')), 0);
  }
  if (s4d.database.get(String((String((s4dmessage.author).id) + '-begcd'))) <= (Math.floor(new Date().getTime() / 1000))) {
    if (s4d.database.has(String((String((s4dmessage.author).id) + '-cash')))) {
      random = mathRandomInt(1, 1000);
      if (random == 69) {
        s4d.database.add(String((String((s4dmessage.author).id) + '-cash')), parseInt(1000));
        s4dmessage.reply({
          embeds: [{
            title: '🙏 Blessed',
            color: null,
            image: {
              url: null
            },
            description: '"Here have `1000` coins" - frostzzone',
            footer: {
              text: 'You got the 1 in 1000 chance'
            },
            thumbnail: {
              url: null
            }
          }],

          allowedMentions: {
            repliedUser: true
          }
        });
      } else {
        random = mathRandomInt(1, 200);
        s4d.database.add(String((String((s4dmessage.author).id) + '-cash')), parseInt(random));
        s4dmessage.reply({
          embeds: [{
            title: 'Begger',
            color: null,
            image: {
              url: null
            },
            description: (['"Here have `', random, '` coins" - Random person'].join('')),
            footer: {
              text: 'Theres a 1 in 1000 chance for begging'
            },
            thumbnail: {
              url: null
            }
          }],

          allowedMentions: {
            repliedUser: true
          }
        });
      }
    } else {
      random = mathRandomInt(1, 200);
      s4d.database.set(String((String((s4dmessage.author).id) + '-cash')), (Number(random)));
      s4dmessage.reply({
        embeds: [{
          title: 'Begger',
          color: null,
          image: {
            url: null
          },
          description: (['"Here have `', random, '` coins" - Random person'].join('')),
          footer: {
            text: 'Theres a 1 in 1000 chance for begging'
          },
          thumbnail: {
            url: null
          }
        }],

        allowedMentions: {
          repliedUser: true
        }
      });
    }
    s4d.database.set(String((String((s4dmessage.author).id) + '-begcd')), ((Math.floor(new Date().getTime() / 1000)) + 5));
  } else {
    s4dmessage.reply({
      embeds: [{
        title: 'Your on cooldown',
        color: null,
        image: {
          url: null
        },
        description: (['Your beg is on cooldown for `', s4d.database.get(String((String((s4dmessage.author).id) + '-begcd'))) - (Math.floor(new Date().getTime() / 1000)), '` more seconds'].join('')),
        footer: {
          text: 'Please wait'
        },
        thumbnail: {
          url: null
        }
      }],

      allowedMentions: {
        repliedUser: true
      }
    });
  }
}
module.exports = beg
console.log("loaded beg.js")