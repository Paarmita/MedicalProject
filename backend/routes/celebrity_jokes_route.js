var express = require('express');
var app = express.Router();

app.get('/celebrity', (req,res) => {
	
let CelebrityJokes = [
  {
    id: 88881,
    joke: 'As President Roosevelt said: "We have nothing to fear but fear itself. And Chuck Norris."'
  },
  {
    id: 88882,
    joke: "Chuck Norris only lets Charlie Sheen think he is winning. Chuck won a long time ago."
  },
  {
    id: 88883,
    joke: 'Everything King Midas touches turnes to gold. Everything Chuck Norris touches turns up dead.'
  },
  {
    id: 88884,
    joke: 'Each time you rate this, Chuck Norris hits Obama with Charlie Sheen and says, "Who is winning now?!"'
  },
  {
    id: 88885,
    joke: "For Charlie Sheen winning is just wishful thinking. For Chuck Norris it's a way of life."
  },
  {
    id: 88886,
    joke: "Hellen Keller's favorite color is Chuck Norris."
  }
  ];
  res.json(CelebrityJokes);

});

module.exports = app;
