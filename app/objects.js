exports = (typeof window === 'undefined') ? global : window;

exports.objectsAnswers =  {
  alterContext : function(fn, obj) {
    function fn(a){
      return a.greeting + ", "+ a.name + "!";
    }
    return fn(obj);
  },

  alterObjects : function(constructor, greeting) {
    constructor.prototype.greeting = greeting;
  },

  iterate : function(obj) {
    var array = [];
    for(key in obj){
      if(obj.hasOwnProperty(key)){
        array.push(key + ": " + obj[key]);
      }
    }
    return array;
  }
};
