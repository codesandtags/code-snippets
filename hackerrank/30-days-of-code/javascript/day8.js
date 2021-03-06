function processData(input) {
    var phoneBook = {},
        entries = input.split('\n'),
        testCases = parseInt(entries[0]),
        data = entries.slice(1,testCases + 1),
        testData = entries.slice(testCases +1);

    for(var i=0; i < testCases; i++){
        var name  = data[i].split(' ')[0];
        var phone = data[i].split(' ')[1];

        phoneBook[name] = phone;
    }

    for(var i=0; i < testData.length; i++){
        var name = testData[i];

        if(phoneBook[name]){
            console.log(name + '=' + phoneBook[name]);
        }else{
            console.log('Not found');
        }
    }
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
