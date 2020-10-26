const Memory = require('./memory');
const Register = require('./register');
const { instructions, parameters } = require('./instructions/instructions');
const Flags = require('./flags');
const MoveInstructions = require('./instructions/MoveInstructions');
const LogicalInstructions = require('./instructions/LogicalInstructions');
const ArithmeticInstructions = require('./instructions/ArithmeticInstructions');
const ConditionInstructions = require('./instructions/ConditionInstructions');

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

    if (this.runNormalInstruction(sinal) !== false) {
      this.ip += parameters[sinal];
    }
  }

  static runNormalInstruction(sinal) {
    if (ArithmeticInstructions[sinal]) {
      return ArithmeticInstructions[sinal](this.memory, this.registers, this.ip);
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

  runConditionInstruction(sinal) {
    switch (sinal) {
      case [instructions.JMP]: {
        const lowbyte = this.memory.get(this.ip + 1);
        const highbyte = this.memory.get(this.ip + 2);

        this.ip = lowbyte | highbyte << 8;
        break;
      }

      case [instructions.JZ]: { // JUMP ZERO JZ
        const lowbyte = this.memory.get(this.ip + 1);
        const highbyte = this.memory.get(this.ip + 2);

        if (this.flags.zero) {
          this.ip = lowbyte | highbyte << 8;
        } else {
          this.ip += 3;
        }

        break;
      }

      case [instructions.JNZ]: { // JUMP NO ZERO JNZ
        console.log('jump no zero');
        const lowbyte = this.memory.get(this.ip + 1);
        const highbyte = this.memory.get(this.ip + 2);

        if (!this.flags.zero) {
          this.ip = lowbyte | highbyte << 8;
        } else {
          this.ip += 3;
        }

        break;
      }

      default:
        return false;
    }

    return true;
  }
}

module.exports = Cpu;
