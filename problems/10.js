/**
 * Problem 10: Strings
 * 
 * Given a string, return a modified version with the first half in UPPERCASE, and the second half in lowercase. 
 * If the string has odd length, the middle character should be lowercase.
 * 
 * @example "abcdef" -> "ABCdef"
*/
function problem(str) {
    let modified = '';
    let half;
    if (str.length % 2 == 0) {
        half = (str.length / 2) - 1;
    } else {
        half = (str.length / 2) - 1.5;
    }
    for (let i = 0; i < str.length; i++) {
        if (i <= half) {
            modified += str[i].toUpperCase();
        } else {
            modified += str[i].toLowerCase();
        }
    }
    return modified;
}

const tests = [
    ["abcdef", "ABCdef"],
    ["abcdefg", "ABCdefg"],
    ["HELLO THERE", "HELLO there"],
    ["js4Life!", "JS4Life!"],
    ["UNiTeD STATes OF AMerICA", "UNITED STATEs of america"]
]

module.exports = {problem, tests};