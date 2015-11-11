exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    return arr.indexOf(item);
  },

  sum : function(arr) {
    var total = 0;
    arr.forEach(function (el, idx, arr) {
      total += el;
    });
    return total;
  },

  remove : function(arr, item) {
    for(var i = 0; i < arr.length; i++){
      if(arr[i] === item){
        arr.splice(i, 1);
      }
    }
    return arr;
  },

  removeWithoutCopy : function(arr, item) {
    for(var i = 0; i < arr.length; i++){
     if(arr[i] === item){
       arr.splice(i, 1);
       i--;
     };
   };
   return arr;
  },

  append : function(arr, item) {
      arr.push(item);
      return arr;
    },

  truncate : function(arr) {
    arr.pop();
    return arr;
  },

  prepend : function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail : function(arr) {
    arr.shift();
    return arr;
  },

  concat : function(arr1, arr2) {
    var combine = arr1.concat(arr2);
    return combine;
  },

  insert : function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count : function(arr, item) {
    var count = 0;
    for(var i = 0; i < arr.length; i++){
      if(arr[i] === item){
        count++;
      }
    }
    return count;
  },

  duplicates : function(arr) {
    var items = {};
    var duplicates = [];
    for (var i = 0; i < arr.length; i++) {
      items[arr[i]] = items[arr[i]] ? items[arr[i]] + 1 : 1; ///dont fully understand, but thanks S.O.
    };
    for (var val in items) {
      if (items[val] > 1) {
        duplicates.push(+val);
      };
    };
    return duplicates;
  },

  square : function(arr) {
    for(var i = 0; i < arr.length; i++){
     arr[i] *= arr[i];
   }
   return arr;
  },

  findAllOccurrences : function(arr, target) {
    var occs =[];
    for(var i = 0; i < arr.length; i++){
      if(arr[i] === target){
        occs.push(i);
      };
    };
      return occs;
  },
};
