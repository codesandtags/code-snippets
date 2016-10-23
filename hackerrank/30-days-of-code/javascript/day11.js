process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
    var arr = [];
    for (arr_i = 0; arr_i < 6; arr_i++) {
        arr[arr_i] = readLine().split(' ');
        arr[arr_i] = arr[arr_i].map(Number);
    }

    let border = 2,
        firstTime = true,
        maxSum = 0;
    for (let i = 0; i < arr.length - border; i++) {
        for (let x = 0; x < arr.length - border; x++) {
            let hourglass = [],
                sum = 0;

            hourglass[0] = [arr[i][x], arr[i][x + 1], arr[i][x + 2]];
            hourglass[1] = [arr[i + 1][x + 1]];
            hourglass[2] = [arr[i + 2][x], arr[i + 2][x + 1], arr[i + 2][x + 2]];
            sum = getSumHourglass(hourglass);

            if (sum >= maxSum || firstTime) {
                maxSum = sum;
                firstTime = false;
            }
        }
    }

    console.log(maxSum);
}

function getSumHourglass(arr) {
    var sum = 0;
    arr.forEach((row) => {
        row.forEach((num, i) => {
            sum += num;
        });
    });

    return sum;
}