var Counter = (function() {
    var num = 0; // private

    function increase() {
        return ++num;
    }

    function decrease() {
        return --num;
    }

    return {
        increase : increase,
        decrease : decrease
    }
})();

console.log(Counter.num);
console.log(Counter.increase());
console.log(Counter.increase());
console.log(Counter.increase());
console.log(Counter.decrease());
console.log(Counter.decrease());
console.log(Counter.decrease());