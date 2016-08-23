//https://github.com/rmurphey/js-assessment

exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
      return arr.indexOf(item);
  },

  sum: function(arr) {
    var l = 0;
    var count = 0;
    while (l < arr.length){
      count = count + arr[l];
      l += 1;
    }
    return count;
  },

  remove: function(arr, item) {
    for(var i= arr.length; i--;){
    if(arr[i] === item){
      arr.splice(i, 1);
    }
  }
  return arr;
  },

  removeWithoutCopy: function(arr, item) {
      for(var i= arr.length; i--;){
    if(arr[i] === item){
      arr.splice(i, 1);
    }
  }
  return arr;
  },

  append: function(arr, item) {
      arr.push(item);
      return arr;
  },

  truncate: function(arr) {
      arr.pop();
      return arr;
  },

  prepend: function(arr, item) {

  },

  curtail: function(arr) {

  },

  concat: function(arr1, arr2) {

  },

  insert: function(arr, item, index) {

  },

  count: function(arr, item) {

  },

  duplicates: function(arr) {

  },

  square: function(arr) {

  },

  findAllOccurrences: function(arr, target) {

  }
};
