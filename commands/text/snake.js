async function snake(s4dmessage, Snake, colourRandom){
  await Snake({
            message: s4dmessage,
            embed: {
                title: 'Snake',
                description: 'GG, you scored **{{score}}** points!',
                color: (colourRandom()),
                footer: 'My foot 🦶',
                timestamp: true
            },
            emojis: {
                empty: '⬛',
                snakeBody: '🟩',
                food: '🫐',
                up: '⬆️',
                right: '⬅️',
                down: '⬇️',
                left: '➡️',
            },
            othersMessage: 'Only <@{{author}}> can use the buttons!',
            buttonText: 'cancel'
        });
}
module.exports = snake
console.log("loaded snake.js")