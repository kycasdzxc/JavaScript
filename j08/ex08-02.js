var num = 0;
var kind;

if (num > 0) {
    kind = '양수';
}

console.log(kind);

if (num > 0) {
    kind = '양수';
}
else {
    kind = '음수';
}

console.log(kind);

if (num > 0) {
    kind = '양수';
}
else if (num < 0) {
    kind = '음수';
}
else {
    kind = '0';
}

kind = !num ? 0 : num > 0 ? '양수' : '음수';

console.log(kind);