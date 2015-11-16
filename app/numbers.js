exports = (typeof window === 'undefined') ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
    var binary = num.toString(2);
    var binaryLength = binary.length;
    return Number(binary.charAt(binaryLength - bit));
  },

  base10: function(str) {
    return parseInt(str, 2);
  },

  convertToBinary: function(num) {
    var binary = num.toString(2);
    if(binary.length < 8){
      binary = "0" + binary;
      return binary;
    }
    return binary;
  },

  multiply: function(a, b) {
    var multipled = a * b
    return parseFloat(multipled.toPrecision(12));
  }
};
