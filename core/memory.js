const maxBytes = 65535;

class Memory extends Uint8Array {
  constructor() {
    super(maxBytes);
  }

  get(address) {
    return this[address];
  }

  set(values) {
    for (let i = 0; i < values.length; i += 1) {
      this[i] = values[i];
    }
  }

  setI(index, value) {
    this[index] = value;
  }
}

module.exports = Memory;
