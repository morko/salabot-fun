const fun = require('./fun');

module.exports = {

  randomcat: {
    type: 'command',
    name: 'randomcat',
    category: 'fun',
    description: "Gets a random cat image.",
    aliases: ['cat'],
    module: 'fun',
    run: fun.randomcat
  },

  randomdog: {
    type: 'command',
    name: 'randomdog',
    category: 'fun',
    description: "Gets a random doggo image.",
    aliases: ['doggo'],
    module: 'fun',
    run: fun.randomdog
  },

  dogfact: {
    type: 'command',
    name: 'dogfact',
    category: 'fun',
    description: "Gives a dogfact.",
    aliases: ['dogfacts'],
    run: fun.dogfact
  },

  catfact: {
    type: 'command',
    name: 'catfact',
    category: 'fun',
    description: "Gives a catfact.",
    aliases: ['catfacts'],
    run: fun.catfact
  },

  stroke: {
    type: 'command',
    name: 'stroke',
    category: 'fun',
    description: "Strokes someones ego.",
    arguments: ["target"],
    argumentsOptional: false,
    run: fun.stroke
  },

  advice: {
    type: 'command',
    name: 'advice',
    category: 'fun',
    description: "Gives you some advice.",
    run: fun.advice
  },

  urbandictionary: {
    type: 'command',
    name: 'urbandictionary',
    category: 'fun',
    description: "Search word from Urban Dictionary.",
    aliases: ['ud', 'urban'],
    arguments: ["word"],
    argumentsOptional: false,
    run: fun.urbandictionary
  },

  fact: {
    type: 'command',
    name: 'fact',
    category: 'fun',
    description: "I'll give you some interesting facts!",
    run: fun.fact
  },

  dice: {
    type: 'command',
    name: 'dice',
    category: 'fun',
    description: 'Rolls dice using rolz.org. '
        + '(check their website for dice codes).',
    argumentsOptional: true,
    arguments: ["dice code"],
    run: fun.dice
  },

  fancyinsult: {
    type: 'command',
    name: 'fancyinsult',
    category: 'fun',
    description: "Insults someone.",
    aliases: ['insult'],
    arguments: ["target"],
    argumentsOptional: false,
    run: fun.fancyinsult
  },

  magic8ball: {
    type: 'command',
    name: 'magic8ball',
    category: 'fun',
    description: "Makes a prediction using a Magic 8 Ball",
    aliases: ['8ball'],
    arguments: ["thing you want prediction for"],
    argumentsOptional: false,
    run: fun.magic8ball
  },
}