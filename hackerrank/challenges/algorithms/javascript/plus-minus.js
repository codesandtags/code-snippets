function main() {
    var n = parseInt(readLine());
    arr = readLine().split(' ');
    arr = arr.map(Number);

    var decimalPlaces = 6,
        positives = (arr.filter( (num) => num > 0).length / arr.length).toFixed(decimalPlaces),
        negatives = (arr.filter( (num) => num < 0).length / arr.length).toFixed(decimalPlaces),
        zeros   = (arr.filter( (num) => num === 0).length / arr.length).toFixed(decimalPlaces);

    console.log(positives);
    console.log(negatives);
    console.log(zeros);
}
