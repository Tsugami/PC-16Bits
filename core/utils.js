class Util {
  static convertDecimalBinaryToNegative(number) {
    return number | 0xffff0000;
  }
}

module.exports = Util;
