//rank conversion from letters to values
function convertRank(rank) {
  const conversions = {
    'A': [1, 11],
    'J': 12,
    'Q': 13,
    'K': 14
  }

  return typeof rank === 'string' ? conversions[rank] : rank;
}

function checkConsecutive(ranks) {
  let isConsecutive;
  const handSize = 5;

  //searchCount tracks how many times we need to go throught the array of cards
  let searchCount = 1;

  //sorting the array in ascending order
  ranks.sort((a, b) => {
    return a-b;
  })

  //we'll need to search twice for consecutives when we have an ace, because that can take 2 values: 1, 11
  if(ranks.length > handSize) {
    searchCount = 2;
  }

  for(let i=0; i<searchCount; i++) {
    isConsecutive = true;
    for(let j=i; j<handSize + i; j++) {
      //checks whether the current and previous elements are consecutive
      if(j > i && ranks[j-1] !== ranks[j] - 1) {
        isConsecutive = false;
        break;
      }
    }  
  }

  return isConsecutive;
}

module.exports = {
  convertRank,
  checkConsecutive
}