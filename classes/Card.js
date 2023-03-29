class Card {
  static ranks = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K']

  static suits = ['H', 'D', 'C', 'S'];
  
  constructor(rank, suit) {
    this.rank = rank;
    this.suit = suit;
  }
}

module.exports = Card;