// function - arrow
function add(a, b) {
    return a + b;
}

console.log(add(4, 5));

function max(a, b) {
    if(a > b) return a;
    return b;
}

// function max(a, b) {
//     return a > b ? a : b;
// }

console.log(max(4, 5));

const x = max;
const y = console.log;

y(x(100, 10));
