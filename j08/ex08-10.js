for(var i = 0 ; i < 2 ; i++) {
    console.log(i);
}

console.log("합계 ========================================");
// 1-100의 합계를 구하시오.
var sum = 0;
for(var i = 1 ; i <= 100 ; i++) {
    sum += i;
}
console.log(sum);
console.log("홀수 ========================================");

// 1-50까지의 홀수를 출력하시오.
for(var i = 1 ; i <= 50 ; i++) {
    if (i % 2) {
    console.log(i);
    }
}
console.log("구구단 =====================================");

// 구구단 출력
for(var i = 2 ; i < 10 ; i++) {
    for(var j = 1 ; j < 10 ; j++) {
        console.log(i, "*", j, "=", i*j);
    }
    console.log(i, "단", "========================================");
}

// if(1) {
//     break;
// }