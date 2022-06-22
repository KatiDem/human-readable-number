module.exports = function toReadable(number) {
    let output = '';
    let numbers = {
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        0: "zero",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety",
        100: "hundred"
    }
    if (number < 21) {
        output = numbers[number]
    } else if (!(number % 100)) {
        let first = +number.toString()[0];
        output = numbers[first] + " hundred";
    } else if (number > 100) {
        let first = +number.toString()[0]
        let second = +(number.toString()[1])
        let last = +number.toString()[2]
        if (second == 1) {
            output = numbers[first] + " hundred " + numbers[last + 10]
        } else {
            output = numbers[first] + " hundred " + (second ? (last ? numbers[second * 10] + ' ' : numbers[second * 10]) : '') + (last ? numbers[last] : '')
        }
    } else if (!(number % 10)) {
        output = numbers[number]
    } else if (number > 20) {
        let first = +number.toString()[0]
        let second = +number.toString()[1]
        output = numbers[first * 10] + ' ' + numbers[second]
    }
    return output;
}
