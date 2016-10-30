/**

 Sam's house has an apple tree and an orange tree that yield an abundance of fruit. In the diagram below,
 the red region denotes his house, where  is the start point and  is the end point. The apple tree is to the left
 of his house, and the orange tree is to its right. You can assume the trees are located on a single point,
 where the apple tree is at point  and the orange tree is at point .

 Input Format

 The first line contains two space-separated integers denoting the respective values of  and .
 The second line contains two space-separated integers denoting the respective values of  and .
 The third line contains two space-separated integers denoting the respective values of  and .
 The fourth line contains  space-separated integers denoting the respective distances that each apple falls from point .
 The fifth line contains  space-separated integers denoting the respective distances that each orange falls from point .

 Constraints

 Output Format

 Print two lines of output:

 On the first line, print the number of apples that fall on Sam's house.
 On the second line, print the number of oranges that fall on Sam's house.
 Sample Input

 7 11
 5 15
 3 2
 -2 2 1
 5 -6
 Sample Output

 1
 1
 Explanation

 The first apple falls at position .
 The second apple falls at position .
 The third apple falls at position .
 The first orange falls at position .
 The second orange falls at position .
 Only one fruit (the second apple) falls within the region between  and , so we print  as our first line of output.
 Only the second orange falls within the region between  and , so we print  as our second line of output.

 **/


process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function(data) {
    input_stdin += data;
});

process.stdin.on('end', function() {
    input_stdin_array = input_stdin.split("\n");
    main();
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
    var s_temp = readLine().split(' ');
    var s = parseInt(s_temp[0]);
    var t = parseInt(s_temp[1]);
    var a_temp = readLine().split(' ');
    var a = parseInt(a_temp[0]);
    var b = parseInt(a_temp[1]);
    var m_temp = readLine().split(' ');
    var m = parseInt(m_temp[0]);
    var n = parseInt(m_temp[1]);
    apple = readLine().split(' ');
    apple = apple.map(Number);
    orange = readLine().split(' ');
    orange = orange.map(Number);

    apple = apple.filter(function(m) {
        var position = a + m;
        return ( position >= s && position <= t);
    });

    orange = orange.filter(function(n) {
        var position = b + n;
        return ( position >= s && position <= t);
    });

    console.log(apple.length);
    console.log(orange.length);

}
