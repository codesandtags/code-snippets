/**
 Given a word , rearrange the letters of  to construct another word  in such a way that  is lexicographically greater than . In case of multiple possible answers, find the lexicographically smallest one among them.

 Input Format

 The first line of input contains , the number of test cases. Each of the next  lines contains .

 Constraints

 will contain only lower-case English letters and its length will not exceed .
 Output Format

 For each testcase, output a string lexicographically bigger than  in a separate line. In case of multiple possible answers, print the lexicographically smallest one, and if no answer exists, print no answer.

 Sample Input

 5
 ab
 bb
 hefg
 dhck
 dkhc
 Sample Output

 ba
 no answer
 hegf
 dhkc
 hcdk
 Explanation

 Test case 1:
 There exists only one string greater than ab which can be built by rearranging ab. That is ba.
 Test case 2:
 Not possible to rearrange bb and get a lexicographically greater string.
 Test case 3:
 hegf is the next string lexicographically greater than hefg.
 Test case 4:
 dhkc is the next string lexicographically greater than dhck.
 Test case 5:
 hcdk is the next string lexicographically greater than dkhc.

 In order to solve this algorithm was necessary read about the Next Lexicographical Permutation Algorithm,
 you can find thd implementation below.

 https://www.nayuki.io/page/next-lexicographical-permutation-algorithm

 */

function processData(input) {
    var words = input.split('\n').splice(1);
    words.forEach(function(word) {
        console.log(getLexicographically(word.split('')).join(''));
    });
}

/**
 * Implementation of the next lexicographical permutation algorithm
 **/
function getLexicographically(array) {
    // Find non-increasing suffix
    var i = array.length - 1;
    while (i > 0 && array[i - 1] >= array[i])
        i--;
    if (i <= 0)
        return ['no answer'];

    // Find successor to pivot
    var j = array.length - 1;
    while (array[j] <= array[i - 1])
        j--;
    var temp = array[i - 1];
    array[i - 1] = array[j];
    array[j] = temp;

    // Reverse suffix
    j = array.length - 1;
    while (i < j) {
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;
        i++;
        j--;
    }

    return array;
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function(input) {
    _input += input;
});

process.stdin.on("end", function() {
    processData(_input);
});
