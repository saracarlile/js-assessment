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
    arr.splice(0, 0, item);
    return arr;
  },

  curtail: function(arr) {
    arr.splice(0, 1);
    return arr;
  },

  concat: function(arr1, arr2) {
    var temp = arr1.concat(arr2);
    return temp;
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count: function(arr, item) {
    var count = 0;
    for(var i=0; i < arr.length; i++){
      if (arr[i] === item)
        count += 1;
    }
    return count;
  },

  duplicates: function (arr) {
    var temp = [];
    var result = [];
    for (var i = arr.length; i--;) {
      var c = arr.shift();
      if (!temp.includes(c)) {
        temp.push(c);
      }
      else if (!result.includes(c)){
        result.push(c);
      }
    }
    return result;
  },

  square: function(arr) {
    var s = arr.map(function(num) {
    return num * num;
  });
  return s;
  },

  findAllOccurrences: function(arr, target) {

  }
};
