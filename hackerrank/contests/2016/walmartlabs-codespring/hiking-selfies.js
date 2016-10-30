/**
 Emma has an old-fashioned camera with  frames of film in it. Emma wants to go hiking with  friends and, during the hike, take exactly one selfie with every possible combination of her friends.

 Given  and , determine whether or not Emma has enough frames of film in her camera to take exactly one photo with every possible combination of her friends. If yes, print the number of extra frames of film she has after taking all the photos; if no, print the number of additional frames of film she needs to accomplish this task.

 Input Format

 The first line contains an integer, , denoting the number of Emma's friends going on the hike.
 The second line contains an integer, , denoting the number of frames of film in her camera.

 Constraints

 Output Format

 Print a single integer denoting the following:

 If Emma has enough film to get a photo of herself with all possible combinations of her  friends, print the number of extra (left over) frames of film she has in her camera after taking all the photos.
 If Emma does not have enough film, print the number of additional frames of film she will need to get a photo of herself with all possible combinations of her  friends.

 Explanation of solution

 Emma takes the selfie

 friends : 3 (Alice, Bob, Dan)
 frames  : 10

 Posible combinations

 1. Emma, Alice, Bob, Dan
 2. Emma, Alice, Bob
 3. Emma, Alice, Dan
 4. Emma, Bob, Dan
 5. Emma, Bob
 6. Emma, Dan
 7. Emma, Alice
 8. Emma (But this combination not count)

 // This formula find the posible combinations without the Emma
 Math.pow(2, friends) - 1

 **/

function processData(input) {
    var friends = Number(input.split('\n')[0]);
    var frames = Number(input.split('\n')[1]);
    var selfies = Math.pow(2, friends) - 1;

    console.log(Math.abs(selfies - frames));
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



