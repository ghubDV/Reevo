const http = require('node:http');
const Deck = require('./classes/Deck');
const Hand = require('./classes/hand');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer();

server.listen(port, hostname, () => {
  const deck = new Deck();
  const hand = new Hand(deck)

  console.log(hand.dealtCards);
  console.log(`Is flush: ${hand.isFlush()}`)
  console.log(`Is straight: ${hand.isStraight()}`)
});