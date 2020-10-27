class Flags {
  constructor(zero = 0, signal = 0, overflow = 0) {
    this.zero = zero;
    this.signal = signal;
    this.overflow = overflow;
  }

  get isZero() {
    return this.zero === 1;
  }

  setZero(zero) {
    this.zero = zero;
  }

  setSignal(signal) {
    this.signal = signal;
  }

  setOverflow(overflow) {
    this.overflow = overflow;
  }

  get isOk() {
    return (this.zero === 1) && (this.overflow === 0) && (this.signal === 0);
  }
}

module.exports = Flags;
