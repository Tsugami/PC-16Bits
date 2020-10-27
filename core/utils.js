class Util {
  static convertDecimalBinaryToNegative(number) {
    return number | 0xffff0000;
  }

  static getOverflowBinary(number) {
    return number >> 16;
  }

  static getOverflowBinaryInversed(number) {
    return (number & 1 << 16) >> 16;
  }

  static getNegativeIdentifier(number) {
    return (number & (1 << 15)) >> 15;
  }

  static inverseNumber(number) {
    return (2 ** 16 - number);
  }
}

module.exports = Util;
