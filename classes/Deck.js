const Card = require('./Card');

class Deck{
  constructor() {
    this.cards = [];
    Card.ranks.forEach(rank => 
      Card.suits.forEach(suit => this.cards.push(new Card(rank, suit)))
    )

    this.shuffle();
  }

  shuffle() {
    this.cards = [...this.cards.sort(() => Math.random() - 0.5)];
  }
  
  dealCards() {
    const hand = this.cards.slice(-5);
    return hand;
  }
}

module.exports = Deck