class Register extends Uint16Array {
  set(address, value) {
    this[address] = value;
  }

  get(address) {
    return this[address];
  }
}

module.exports = Register;
