const { convertRank, checkConsecutive } = require('../helpers/helper');

class Hand {
  constructor(deck) {
    this.dealtCards = deck.dealCards()
  }

  isFlush() {
    let suit;
    let flush = true;

    //goes through the cards in hand and checks if they have the same suit
    this.dealtCards.forEach(card => {
      if(!suit) {
        suit = card.suit;
      } else if(card.suit !== suit) {
        flush = false;
        return;
      }
    })
    return flush;
  }
  
  isStraight() {
    //ranks of the cards are stored, suits won't matter
    let ranks = this.dealtCards.map(card => card.rank);
  
    //check if every card is unique, otherwise it's not a straight
    if(new Set([...ranks]).size !== 5) {
      return false;
    }
  
    //converts all ranks to numbers and flattens the array when we have Aces (2 possible values)
    let converted = []
    converted = ranks.map(rank => convertRank(rank)).flat();
  
    //checks whether the cards are consecutive. If they do, the condition is satisfied
    return checkConsecutive(converted);
  }
}

module.exports = Hand