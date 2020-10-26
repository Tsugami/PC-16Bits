class Flags {
  constructor(zero = 0, signal = 0) {
    this.zero = zero;
    this.signal = signal;
  }

  setZero(zero) {
    this.zero = zero;
  }

  setSignal(signal) {
    this.signal = signal;
  }
}

module.exports = Flags;
