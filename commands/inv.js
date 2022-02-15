let Database = require("easy-json-database")

async function inv(message) {
  let database = new Database("../database.json");
  if(database.has(String((String((message.author).id) + '-inv')))) {
    inv_list = database.get(String((String((message.author).id) + '-inv')));
    if (!(inv_list.length == savedInvList.length)) {
      var repeat_end = savedInvList.length - inv_list.length;
      for (var count = 0; count < repeat_end; count++) {
        inv_list.push((savedInvList[((inv_list.length + 1) - 1)]));
      }
    }
  } else {
    inv_list = savedInvList;
  }
  let embed = new Discord.MessageEmbed()
  embed.setTitle('Inventory');
  embed.addField('🪓 Axe', (['You have (`', inv_list[(1 * 2 - 1)], '`)'].join('')), true);
  embed.addField('🎈 Balloon', (['You have (`', inv_list[(2 * 2 - 1)], '`)'].join('')), true);
  embed.addField('<:block:917859160203346000> Code Block', (['You have (`', inv_list[(3 * 2 - 1)], '`)'].join('')), true);
  embed.addField('<:candy_cane:916777883991674912> Candy Cane', (['You have (`', inv_list[(4 * 2 - 1)], '`)'].join('')), true);
  embed.addField('🎆 FireWork', (['you have (`', inv_list[(5 * 2 - 1)], '`)'].join('')));
  message.reply({
    embeds: [embed]
  });

  database.set(String((String((message.author).id) + '-inv')), inv_list);
}

module.exports = inv
console.log("loaded inv.js")