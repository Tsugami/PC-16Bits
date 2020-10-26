class Memory {
  constructor () {
    this._maxBytes = 65535
    this._memory = new Uint8Array(this._maxBytes)
  }

  get (address) {
    return this._memory[address]
  }
}

module.exports = Memory