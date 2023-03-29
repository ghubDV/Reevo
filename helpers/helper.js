function getRandomKeys(obj) {
  const keys = Object.keys(obj);

  return [...keys].sort(() => 0.5 - Math.random()).slice(0,3);
}

module.exports = {
  getRandomKeys
}