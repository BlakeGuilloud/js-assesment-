exports = (typeof window === 'undefined') ? global : window;

exports.functionsAnswers = {
  argsAsArray : function(fn, arr) {
    return fn.apply(undefined, arr)
  },

  speak : function(fn, obj) {
    return fn.call(obj)
  },

  functionFunction : function(str) {
    return function(a){
    return str +', '+ a;
    };
  },

  makeClosures : function(arr, fn) {
    var squared = [];
    var newFunction = function(el) {
     return function() {
        return fn(el);
        };
   };
   for (var i = 0; i < arr.length; i++) {
     squared.push(newFunction(arr[i]));
   }
   return squared;
  },

  partial : function(fn, str1, str2) {
    return function(ex) {
      return fn.call(null, str1, str2, ex);
    };
  },

  useArguments : function() {
    var sum = 0;
    for(var i = 0; i < arguments.length; i++){
      sum += arguments[i];
    }
    return sum;
  },

  callIt : function(fn) {
    var realArguments = Array.prototype.slice.call(arguments, 1, arguments.length);
    fn.apply(undefined, realArguments);
  },

  partialUsingArguments : function(fn) {
    var realArguments = Array.prototype.slice.call(arguments, 1, arguments.length);
    return function() {
    var moreArguments = realArguments.concat(Array.prototype.slice.call(arguments));
    return fn.apply(undefined, moreArguments);
    };
  },

  curryIt : function(fn) {

  }
};
