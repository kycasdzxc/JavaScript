var string = 'Hello World.';
var search = 'l';
var count = 0;

for(var i = 0 ; i < string.length ; i++) {
    if (string[i] !== search) continue;
    count++
}

console.log(count);

const regExp = new RegExp(search, 'g'); // 플래그 옵션 / g : global(문자열 전체), i 대소문자 구분 않고 일치, m 여러 줄 일치
console.log(string.match(regExp).length);

console.log(string.match(/l/g).length);
console.log(string.match(/[a-z]]/g).length);

