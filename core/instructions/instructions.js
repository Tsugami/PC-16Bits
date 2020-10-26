const instructions = {
  // Logical Instructions
  AND: 10,
  OR: 11,
  XOR: 12,

};

const parameters = {
  [instructions.AND]: 3,
  [instructions.OR]: 3,
  [instructions.XOR]: 3,
};

module.exports = {
  instructions,
  parameters,
};
