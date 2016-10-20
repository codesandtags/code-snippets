/**
 * This Exercise is to test the recursion of the getFactorial function
 * @param input
 */

function processData(input) {
    console.log(getFactorial(parseInt(input)));
}

function getFactorial(n){
    return (n == 1) ? n : n * getFactorial(n - 1);
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
    processData(_input);
});
