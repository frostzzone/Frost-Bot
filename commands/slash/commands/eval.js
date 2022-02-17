const { SlashCommandBuilder } = require('@discordjs/builders');

const data = new SlashCommandBuilder()
	.setName('eval')
	.setDescription('An owner only command for testing purposes')
	.addStringOption(option =>
		option.setName('code')
			.setDescription('For testing purposes')
			.setRequired(false));
module.exports = {data}