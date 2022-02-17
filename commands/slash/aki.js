async function aki(interaction, akinator){
  await interaction.reply({
                content: (
                    akinator(interaction, {
                        language: "en",
                        childMode: true,
                        gameType: (interaction.options.getString('type')),
                        useButtons: true
                    })),
                ephemeral: true,
                components: []
            })
}
module.exports = aki
console.log('loaded /slash/aki.js');