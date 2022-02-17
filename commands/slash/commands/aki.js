const { SlashCommandBuilder } = require('@discordjs/builders');

const data = new SlashCommandBuilder()
	.setName('aki')
	.setDescription('Play akinator')
	.addStringOption(option =>
		option.setName('type')
    .setDescription('What your thinking of')
			.setRequired(true)
.addChoice('Animal', 'animal')
			.addChoice('Character', 'character')
			.addChoice('Object', 'object'));
module.exports = {data}