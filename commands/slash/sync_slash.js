/*
SUB_COMMAND	- 1	
SUB_COMMAND_GROUP	- 2	
STRING	- 3	
INTEGER	- 4	Any integer between -2^53 and 2^53
BOOLEAN	- 5	
USER	- 6	
CHANNEL	- 7	Includes all channel types + categories
ROLE	- 8	
MENTIONABLE	- 9	Includes users and roles
NUMBER	- 10	Any double between -2^53 and 2^53
ATTACHMENT	- 11	attachment object
*/
async function sync(client, dbug)
{
	const synchronizeSlashCommands = require('discord-sync-commands');
	synchronizeSlashCommands(client, [
	{
		name: 'say',
		description: 'Repeats everything after say',
		options: [
		{
			"type": 3,
			"name": "text",
			"description": "Send this",
			"required": true
		}]
	},
	{
		name: 'aki',
		description: 'Play akinator',
		options: [
		{
			choices: [
			{
				name: "Animal",
				value: "animal"
			},
			{
				name: "Character",
				value: "character"
			},
			{
				name: "Object",
				value: "object"
			}],
			type: 3,
			name: "type",
			description: "What your thinking of",
			required: true
		}]
	},
	{
		name: "eval",
		description: "An owner only command for testing purposes",
		options: [
		{
			type: 3,
			name: "code",
			description: "For testing purposes",
			required: false
		}]
	},
	{
		name: "beg",
		description: "beg for money",
		options: []
	},
	{
		name: "help",
		description: "Get a help message",
		options: []
	},
	{
		name: "invite",
		description: "My invite link",
		options: []
	},
	{
		name: "s4d",
		description: "Get a link to scratch for discord, implemented into s4d faq bot",
		options: [
		{
			type: 4,
			name: "version",
			description: "Version of s4d you want",
			required: true
		}]
	},
	{
		name: "ticketset",
		description: "Set channel of create ticket button",
		options: [
		{
			type: 7,
			name: "channel",
			description: "Channel for ticket button",
			required: true
		}]
	},
	{
		name: "ticketclose",
		description: "Close ticket (current channel)",
		options: []
	},
	{
		name: "ticketarchive",
		description: "Archive ticket (current channel)",
		options: []
	},
	{
		name: "ticketunarchive",
		description: "Unarchive ticket if archived or locked (current channel)",
		options: []
	}],
	{
		debug: dbug
	});
}
module.exports = sync