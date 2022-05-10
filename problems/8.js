/**
 * Problem 8: Avg with Reducing 
 * 
 * Given a list of numbers, return the average of the list.
 * Use the .reduce function.
 * 
 * @example [1, 2, 3] -> 6
*/
function problem(numbers) {
    const summed = numbers.reduce(function (sum, item) {
        return sum + item;
    }, 0);
    return summed / numbers.length
}

const tests = [
    [[1, 2, 3], 2],
    [[2, 31, 4, 5, 2, 67], 18.5],
]

module.exports = {problem, tests};