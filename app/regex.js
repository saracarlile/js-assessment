exports = typeof window === 'undefined' ? global : window;

exports.regexAnswers = {
  containsNumber: function (str) {
    var regEx = /[\d+]/g;
    return regEx.test(str);
  },

  containsRepeatingLetter: function (str) {
    var regEx = /([A-Za-z])\1/;
    return regEx.test(str);
  },

  endsWithVowel: function (str) {
    var regEx = /(a|e|i|o|u|A|E|I|O|U)$/;
    return regEx.test(str);
  },

  captureThreeNumbers: function (str) {
     var regEx = /\d{3}/;
     var matches = str.match(regEx);
    return matches ? matches[0] : false;
  },

  matchesPattern: function (str) {
    var regEx = /^(\d{3})-(\d{3})-(\d{4})$/;
    return regEx.test(str);
  },

  isUSD: function (str) {
    var regEx = /^\$\d{1,3}(,\d{3})*(\.\d{2})?$/;
    return regEx.test(str);
  }
};
 