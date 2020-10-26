const Memory = require('./memory')

class Cpu {
  constructor () {
    this.flags = {
      zero: 0,
      signal: 0,
    }

    this.registers = new Uint16Array(10)
    this.memory = new Memory()
    this.halted = false
    // instruction pointer
    this.ip = 0
  }

  next () {
    if (this.halted) {
      return
    }

    const sinal = this.memory.get(this.ip)
    console.log('SINAL', sinal)
    switch (sinal) {
      case 0:
        console.log('deu halted')
        this.halted = true
        break

      case 1: { // mov_constant reg
      // move para um registrado da memoria
        const to = this.memory.get(this.ip + 1)
        const constant = this.memory.get(this.ip + 2)

        this.registers[to] = constant
        this.ip += 3
        break
      }

      case 2: {
        const to = this.memory.get(this.ip + 1)
        const lowbyte = this.memory.get(this.ip + 2)
        const highbyte = this.memory.get(this.ip + 3)

        this.registers[to] = lowbyte | highbyte << 8
        this.ip += 4
        break
      }

      case 3: { // mov_constant reg
      // move para um registrado da memoria
        const to = this.memory.get(this.ip + 1)
        const constant = this.memory.get(this.ip + 2)

        this.registers[to] = this.registers[constant]
        this.ip += 3
        break
      }

      case 4: { // mov_constant reg
        // move para um registrado da memoria
          const to = this.memory.get(this.ip + 1)
          const constant = this.memory.get(this.ip + 2)

          this.registers[to] = this.memory._memory[constant]
          this.ip += 3
          break
        }

      case 5: { // aDD
        // move para um registrado da memoria
          const to = this.memory.get(this.ip + 1)
          const second = this.memory.get(this.ip + 2)
          const third = this.memory.get(this.ip + 3)

          this.registers[to] = this.registers[second] + this.registers[third]
          this.ip += 4
          break
        }

        case 6: { // -
            const to = this.memory.get(this.ip + 1)
            const second = this.memory.get(this.ip + 2)
            const third = this.memory.get(this.ip + 3)

            this.registers[to] = this.registers[second] - this.registers[third]
            this.ip += 4
            break
          }

        case 7: { // *
            const to = this.memory.get(this.ip + 1)
            const second = this.memory.get(this.ip + 2)
            const third = this.memory.get(this.ip + 3)

            this.registers[to] = this.registers[second] * this.registers[third]
            this.ip += 4
            break
          }

          case 8: { // /
            const to = this.memory.get(this.ip + 1)
            const second = this.memory.get(this.ip + 2)
            const third = this.memory.get(this.ip + 3)

            this.registers[to] = Math.floor(this.registers[second] / this.registers[third])
            this.ip += 4
            break
          }

          case 9: { // %
            const to = this.memory.get(this.ip + 1)
            const second = this.memory.get(this.ip + 2)
            const third = this.memory.get(this.ip + 3)

            this.registers[to] = this.registers[second] % this.registers[third]
            this.ip += 4
            break
          }

          case 10: { // and
            const to = this.memory.get(this.ip + 1)
            const second = this.memory.get(this.ip + 2)
            const third = this.memory.get(this.ip + 3)

            this.registers[to] = this.registers[second] & this.registers[third]
            this.ip += 3
            break
          }

          case 11: { // or
            const to = this.memory.get(this.ip + 1)
            const second = this.memory.get(this.ip + 2)
            const third = this.memory.get(this.ip + 3)

            this.registers[to] = this.registers[second] | this.registers[third]
            this.ip += 3
            break
          }

          case 12: { // xor
            const to = this.memory.get(this.ip + 1)
            const second = this.memory.get(this.ip + 2)
            const third = this.memory.get(this.ip + 3)

            this.registers[to] = this.registers[second] ^ this.registers[third]
            this.ip += 3
            break
          }

          case 13: { // ===
            const second = this.memory.get(this.ip + 1)
            const third = this.memory.get(this.ip + 2)
            const res = this.registers[second] - this.registers[third]
            this.flags.zero = res === 0
            this.flags.signal = (res & (1 << 15)) >> 15

            this.ip += 3
            break
          }

          case 14: {
            const lowbyte = this.memory.get(this.ip + 1)
            const highbyte = this.memory.get(this.ip + 2)

            this.ip = lowbyte | highbyte << 8
            break
          }

          case 15: { // JUMP ZERO JZ
            const lowbyte = this.memory.get(this.ip + 1)
            const highbyte = this.memory.get(this.ip + 2)

            if (this.flags.zero) {
              this.ip = lowbyte | highbyte << 8
            } else {
              this.ip += 3
            }

            break
          }

          case 16: { // JUMP NO ZERO JNZ
            console.log('jump no zero')
            const lowbyte = this.memory.get(this.ip + 1)
            const highbyte = this.memory.get(this.ip + 2)

            if (!this.flags.zero) {
              this.ip = lowbyte | highbyte << 8
            } else {
              this.ip += 3
            }

            break
          }
    }

  }


}

module.exports = Cpu