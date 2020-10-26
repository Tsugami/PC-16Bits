const MoveInstructions = require('../MoveInstructions');
const { instructions } = require('../instructions');
const Memory = require('../../memory');
const Register = require('../../register');
const Util = require('../../utils');

describe('Move Instructions', () => {
  const memory = new Memory();
  const registers = new Register(10);

  memory.set([
    1, 0, 2, 4,
  ]);
  it('should move 2 to reg0', () => {
    MoveInstructions[instructions.MOV_C](memory, registers, 0);
    expect(registers.get(0)).toEqual(2);
  });

  it('should move 2 and 4 to reg0', () => {
    MoveInstructions[instructions.MOV_N](memory, registers, 0);
    expect(registers.get(0)).toEqual(1026);
  });

  it('should move 5 to reg0', () => {
    registers.set(2, 5);
    MoveInstructions[instructions.MOV_R](memory, registers, 0);
    expect(registers.get(0)).toEqual(5);
  });

  it('should move 4 to reg0', () => {
    memory.set([1, 0, 3, 4]);
    MoveInstructions[instructions.MOV_M](memory, registers, 0);
    expect(registers.get(0)).toEqual(4);
  });
});
