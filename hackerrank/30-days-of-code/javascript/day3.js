function processData(input) {
    //Enter your code here
    var values = input.split('\n'),
        mealCost = parseFloat(values[0]),
        tipPercent = parseFloat(values[1]),
        taxPercent = parseFloat(values[2]),
        tip = parseFloat(mealCost * tipPercent / 100),
        tax = parseFloat(mealCost * taxPercent / 100),
        totalCost = Math.round(mealCost + tip + tax);

    console.log('The total meal cost is ' + totalCost + ' dollars.');
}

processData('10.25\n17\n5');
