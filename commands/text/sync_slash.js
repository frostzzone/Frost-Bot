async function sync(pooth){
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const fs = require('fs');
  const path = require('path')

const commands = [];
const commandFiles = fs.readdirSync(path.join(__dirname ,'slash/commands')).filter(file => file.endsWith('.js'));

fs.writeFileSync(pooth,'', function(err) {

    });

for (const file of commandFiles) {
	const command = require(path.join(__dirname,`slash/commands/${file}`));
  console.log(command.data)
fs.appendFileSync(pooth, (JSON.stringify(command.data)+'\n\n'), function(err) {

    });	commands.push(command.data.toJSON());
}

  
  
/*const rest = new REST({ version: '9' }).setToken(client.token);

(async () => {
	try {
		console.log('Started refreshing application (/) commands.');

		await rest.put(
			Routes.applicationCommands(client.application.id),
			{ body: commands },
		);

		console.log('Successfully reloaded application (/) commands.');
	} catch (error) {
		console.error(error);
	}
})();*/
}
module.exports = sync