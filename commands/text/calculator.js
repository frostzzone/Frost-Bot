async function calc(s4dmessage, Calculator, colourRandom) {
  await Calculator({
    message: s4dmessage,
    embed: {
      title: 'Cal cu litor',
      color: (colourRandom()),
      footer: 'my foot 🦶',
      timestamp: true
    },
    disabledQuery: 'This calculator is disabled',
    invalidQuery: 'Well that dont work here',
    othersMessage: 'Only <@{{author}}> can use the buttons!'
  });
}
module.exports = calc
console.log("loaded calculator.js")