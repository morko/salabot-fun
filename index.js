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
    timeout: 10,
    level: 0,
    run: fun.dogfact
  },

  catfact: {
    type: 'command',
    name: 'catfact',
    category: 'fun',
    description: "Gives a catfact.",
    aliases: ['catfacts'],
    timeout: 10,
    level: 0,
    run: fun.catfact
  },

  stroke: {
    type: 'command',
    name: 'stroke',
    category: 'fun',
    description: "Strokes someones ego.",
    args: ["target"],
    argumentsOptional: false,
    run: fun.stroke
  },

  yomomma: {
    type: 'command',
    name: 'yomomma',
    category: 'fun',
    description: "A random yomomma joke.",
    run: fun.yomomma
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
    args: ["word"],
    argumentsOptional: fun.urbandictionary
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
    args: ["dice code"],
    run: fun.dice
  },

  fancyinsult: {
    type: 'command',
    name: 'fancyinsult',
    category: 'fun',
    description: "Insults someone.",
    aliases: ['insult'],
    args: ["target"],
    argumentsOptional: true,
    run: fun.fancyinsult
  },

  magic8ball: {
    type: 'command',
    name: 'magic8ball',
    category: 'fun',
    description: "Makes a prediction using a Magic 8 Ball",
    aliases: ['8ball'],
    run: fun.magic8ball
  },
}