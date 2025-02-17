const instructions = {
  HALTED: 0,
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
  MOV_N: 2,
  MOV_R: 4,
  MOV_M: 18,
  STORE: 17,
  // Condition Instructions
  CMP: 13,
  // JUMPS
  JMP: 14,
  JZ: 15,
  JNZ: 16,
  JG: 19,
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
  // Move Instructions
  [instructions.MOV_C]: 3,
  [instructions.MOV_N]: 4,
  [instructions.MOV_R]: 3,
  [instructions.MOV_M]: 3,
  [instructions.STORE]: 2,
  // JUMP
  [instructions.JZ]: 3,
  [instructions.JG]: 1,
};

module.exports = {
  instructions,
  parameters,
};
