async function sync(client, dbug) {
    const synchronizeSlashCommands = require('discord-sync-commands');
    synchronizeSlashCommands(client, [{
            name: 'say',
            description: 'Repeats everything after say',
            options: [{
                "type": 3,
                "name": "text",
                "description": "Send this",
                "required": true
            }]
        },
        {
            name: 'aki',
            description: 'Play akinator',
            options: [{
                choices: [{
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
                    }
                ],
                type: 3,
                name: "type",
                description: "What your thinking of",
                required: true
            }]
        },
        {
            name: "eval",
            description: "An owner only command for testing purposes",
            options: [{
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
        }
    ], {
        debug: dbug
    });
}
module.exports = sync