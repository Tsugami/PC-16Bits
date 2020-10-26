const instructions = {
  // Logical Instructions
  AND: 10,
  OR: 11,
  XOR: 12,
  // Arithmetic Instructions
  ADD: 5,
  SUB: 6,
  MUL: 7,
  DIV: 8,
  MOD: 9,
  // Move Instructions
  MOV_C: 1,
  MOV: 2,
  MOV_R: 4,
  MOV_M: 5,
};

const parameters = {
  // Logical Instructions
  [instructions.AND]: 3,
  [instructions.OR]: 3,
  [instructions.XOR]: 3,
  // Arithmetic Instructions
  [instructions.ADD]: 4,
  [instructions.SUB]: 4,
  [instructions.MUL]: 4,
  [instructions.DIV]: 4,
  [instructions.MOD]: 4,
};

module.exports = {
  instructions,
  parameters,
};
