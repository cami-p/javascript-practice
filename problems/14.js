/**
 * Problem 14: Majority Element
 * 
 * Given a list of numbers, return the majority number.
 * The majority number is the one that appears at least ⌊n/2⌋ times, where n is the size of the list.
 * 
 * @example [3,2,3] -> 3
*/
function problem(numbers) {
    let counter = {};
    for (const element of numbers) {
        if (element in counter) {
            counter[element] += 1;
        } else {
            counter[element] = 1;
        }
    }
    for (const num in counter) {
        if (counter[num] >= numbers.length / 2) {
            return parseInt(num);
        }
    }
}

const tests = [
    [[3,2,3], 3],
    [[2,2,1,1,3,2,2], 2]
]

module.exports = {problem, tests};