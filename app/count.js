exports = (typeof window === 'undefined') ? global : window;

exports.countAnswers = {
  count : function (start, end) {
    var i;
    function counter () {
      console.log(start++);

      if (start <= end) {
        i = setTimeout(counter, 200);
      }
    }

    counter();

    return {
      cancel : function () {
        clearTimeout(i);
      }
    };
  }
};
