async function beg(interaction, s4d, mathRandomInt, MessageEmbed) {
    if (s4d.database.has(String((String((interaction.member.user).id) + '-cash')))) {
        random = mathRandomInt(1, 1000);
        if (random == 69) {
            s4d.database.add(String((String((interaction.member.user).id) + '-cash')), parseInt(10000));
            await interaction.reply({
                embeds: [new MessageEmbed()
                    .setTitle(String('🙏 Blessed'))


                    .setDescription(String('"Here have `10000` coins" - frostzzone'))
                    .setFooter(String('You got the 1 in 1000 chance'))


                ],
            });
        } else {
            random = mathRandomInt(1, 200);
            s4d.database.add(String((String((interaction.member.user).id) + '-cash')), parseInt(random));
            await interaction.reply({
                embeds: [new MessageEmbed()
                    .setTitle(String('Begger'))


                    .setDescription(String((['"Here have `', random, '` coins" - Random person'].join(''))))
                    .setFooter(String('Theres a 1 in 1000 chance for begging'))


                ],
            });
        }
    } else {
        random = mathRandomInt(1, 200);
        s4d.database.set(String((String((interaction.member.user).id) + '-cash')), (Number(random)));
        await interaction.reply({
            embeds: [new MessageEmbed()
                .setTitle(String('Begger'))


                .setDescription(String((['"Here have `', random, '` coins" - Random person'].join(''))))
                .setFooter(String('Theres a 1 in 1000 chance for begging'))


            ],
        });
    }
}
module.exports = beg
console.log('loaded /slash/beg.js');