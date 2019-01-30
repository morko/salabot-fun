const config = require('./config.json');
const querystring = require('querystring');

module.exports.randomcat;
function randomcat(msg, bot, args) {
  let url = 'http://aws.random.cat/meow';
  return bot.utils.http.getJSON(url)
    .then((result) => {
      return msg.channel.send(result.file);
    });
}

module.exports.randomdog;
function randomdog(msg, bot, args) {
  let url = 'https://random.dog/woof.json';
  return bot.utils.http.getJSON(url)
    .then((result) => {
      return msg.channel.send(result.url);
    });
}

module.exports.dogfact;
function dogfact(msg, bot) {
  let url = 'https://dog-api.kinduff.com/api/facts';
  return bot.utils.http.getJSON(url)
    .then((result) => {
      return msg.channel.send(result.facts[0]);
    });
}

module.exports.catfact;
function catfact(msg, bot) {
  let url = 'https://catfact.ninja/fact';
  return bot.utils.http.getJSON(url)
    .then((result) => {
      return msg.channel.send(result.fact);
    });
}

module.exports.stroke;
function stroke(msg, bot, name) {
  let params = {
    firstName: name,
    lastName: '',
  };
  let url ='http://api.icndb.com/jokes/random?'
          + querystring.stringify(params);
  return bot.utils.http.getJSON(url)
    .then((result) => {
      if (result.type === 'success') {
        let compliment = result.value.joke.replace(/\&quot;/g, '"');
        compliment = compliment.replace(/  /g, ' ');
        compliment = compliment.replace(/\&lt;/g, '<');
        compliment = compliment.replace(/\&gt;/g, '>');
        return msg.channel.send(compliment);
      } else {
        throw new Error('Something went terribly wrong.');
      }
    });
}

module.exports.yomomma;
function yomomma(msg, bot) {
  let url = 'http://api.yomomma.info/';
  return bot.utils.http.getJSON(url)
    .then((result) => {
      return msg.channel.send(result.joke);
    });
}

module.exports.advice;
function advice(msg, bot) {
  let url = 'http://api.adviceslip.com/advice';
  return bot.utils.http.getJSON(url)
    .then((result) => {
      return msg.channel.send(result.slip.advice);
    });
}

module.exports.urbandictionary;
function urbandictionary(msg, bot, word) {
  let params = {
    term: word
  };
  let url = 'http://api.urbandictionary.com/v0/define?'
        + querystring.stringify(params);
  return bot.utils.http.getJSON(url)
    .then((result) => {
      if (result.result_type !== 'no_results') {
        let text = '\n**Word: **: ' + result.list[0].word;
        text += '\n**Definition: **: ' + result.list[0].definition;
        text += '\n**Example: **: ' + result.list[0].example;
        return msg.channel.send(text);
      } else {
        return msg.reply(word + ": This word is so screwed up, even Urban Dictionary doesn't have it in its database");
      }
    });
}

module.exports.fact;
function fact(msg, bot) {
  let url = 'http://www.fayd.org/api/fact.xml';
  return bot.utils.http.getXML(url)
    .then((result) => {
      return msg.channel.send(result.facts.fact[0]);
    });
}

module.exports.dice;
function dice (msg, bot, dice) {
  let dice = dice || 'd6';
  let url = 'https://rolz.org/api/?' + dice + '.json';
  return bot.utils.http.getJSON(url)
    .then((result) => {
      return msg.channel.send('Your ' + result.input + ' resulted in '
            + result.result + result.details);
    });
}

module.exports.fancyinsult;
function fancyinsult(msg, bot, target) {
  let url = 'http://quandyfactory.com/insult/json/';
  return bot.utils.http.getJSON(url)
    .then((result) => {
      if (!target) {
        return msg.channel.send(result.insult);
      } else {
        return msg.channel.send(target + ' ' + result.insult);
      }
    });
}

module.exports.magic8ball;
let answers = [
  'Signs point to yes.',
  'Yes.',
  'Reply hazy, try again.',
  'Without a doubt.',
  'My sources say no.',
  'As I see it, yes.',
  'You may rely on it.',
  'Concentrate and ask again.',
  'Outlook not so good.',
  'It is decidedly so.',
  'Better not tell you now.',
  'Very doubtful.',
  'Yes - definitely.',
  'It is certain.',
  'Cannot predict now.',
  'Most likely.',
  'Ask again later.',
  'My reply is no.',
  'Outlook good.',
  'Don\'t count on it.',
  'Who cares?',
  'Never, ever, ever.',
  'Possibly.',
  'There is a small chance.'
];
function (msg, bot) {
  let answer = answers[Math.floor(Math.random() * answers.length)];
  return msg.channel.send('The Magic 8 Ball says:\n```' + answer + '```');
}