const Memory = require('./memory');
const Register = require('./register');
const Flags = require('./flags');

const { instructions, parameters } = require('./instructions/instructions');

const MoveInstructions = require('./instructions/MoveInstructions');
const LogicalInstructions = require('./instructions/LogicalInstructions');
const ArithmeticInstructions = require('./instructions/ArithmeticInstructions');
const ConditionInstructions = require('./instructions/ConditionInstructions');
const JumpInstructions = require('./instructions/JumpInstructions');

class Cpu {
  constructor() {
    this.flags = new Flags();
    this.registers = new Register(10);
    this.memory = new Memory();
    this.halted = false;
    // instruction pointer
    this.ip = 0;
  }

  next() {
    if (this.halted) {
      return;
    }

    const sinal = this.memory.get(this.ip);
    console.log('SINAL', sinal);

    if (instructions.HALTED === sinal) {
      console.log('deu halted');
      this.halted = true;
      return;
    }

    const newPointer = this.runChangePointerInstruction(sinal);
    if (newPointer !== false) {
      this.ip += newPointer;
      return;
    }

    if (this.runNormalInstruction(sinal) !== false) {
      this.ip += parameters[sinal];
      return;
    }

    throw new Error('sinal invalid');
  }

  runChangePointerInstruction(sinal) {
    if (JumpInstructions[sinal]) {
      return JumpInstructions[sinal](this.memory, this.registers, this.ip, this.flags);
    }

    return false;
  }

  runNormalInstruction(sinal) {
    if (ArithmeticInstructions[sinal]) {
      return ArithmeticInstructions[sinal](this.memory, this.registers, this.ip, this.flags);
    }

    if (LogicalInstructions[sinal]) {
      return LogicalInstructions[sinal](this.memory, this.registers, this.ip);
    }

    if (MoveInstructions[sinal]) {
      return MoveInstructions[sinal](this.memory, this.registers, this.ip);
    }

    if (ConditionInstructions[sinal]) {
      return ConditionInstructions[sinal](this.memory, this.registers, this.ip, this.flags);
    }

    return false;
  }
}

module.exports = Cpu;
