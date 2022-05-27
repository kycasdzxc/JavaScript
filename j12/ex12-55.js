var res = [1, 2, 3].map(function (item) {
    return item * 2;
})
console.log(res);
var res = [1, 2, 3].filter(function (item) {
    return item % 2;
})
console.log(res);
var res = [1, 2, 3].reduce(function (acc, cur) {
    return acc + cur;
}, 0)
console.log(res);