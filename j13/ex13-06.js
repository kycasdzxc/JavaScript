function foo() {
    console.log("global function foo")
}

function bar() {
    function foo() { // 주석처리하면 global function foo 나옴
        console.log("local function foo")
    }
    foo();
}

bar();